import { walk } from "https://deno.land/std/fs/walk.ts";
import { resolve, dirname } from "https://deno.land/std/path/mod.ts";

const packagesDir = resolve("packages");
// Regex to find relative imports (./ or ../) that don't end with a common extension
// and capture the path part before the closing quote/apostrophe.
const importRegex = /(from\s+['"])(\.?\.\/[^'"]+?)(\.(?:js|jsx|ts|tsx|css|less|json))?(['"])/g;

console.log(`Starting import fix in ${packagesDir}...`);

let filesChecked = 0;
let filesModified = 0;

for await (const entry of walk(packagesDir, {
    includeDirs: false,
    exts: [".ts", ".tsx"],
    match: [/^.*\/src\/.*$/], // Only look within src directories
    skip: [/node_modules/, /dist/, /lib/, /types/, /\.(spec|test|stories)\.(ts|tsx)$/, /\.d\.ts$/], // Skip common exclusions and test/story files
})) {
    filesChecked++;
    try {
        const filePath = entry.path;
        const fileDir = dirname(filePath);
        const content = await Deno.readTextFile(filePath);
        let newContent = content; // Start with original content
        let changed = false;

        const importRegex = /(from\s+['"])(\.?\.\/[^'"]+?)(\.(?:js|jsx|ts|tsx|css|less|json|mjs|cjs))?(['"])/g;

        // --- Step 1: Collect potential fixes ---
        const potentialFixes = [];
        for (const match of content.matchAll(importRegex)) {
            const [fullMatch, prefix, path, existingExt, suffix] = match;
            if (path.startsWith('.') && !existingExt && !path.endsWith('/index')) {
                potentialFixes.push({ fullMatch, prefix, path, suffix, fileDir });
            }
        }

        // --- Step 2: Check paths asynchronously ---
        const replacements = [];
        if (filePath.includes('ffe-form-react/src/index.ts')) console.log(`DEBUG: Checking fixes for ${filePath}`);
        for (const fix of potentialFixes) {
            const { fullMatch, prefix, path, suffix, fileDir } = fix;
            if (filePath.includes('ffe-form-react/src/index.ts')) console.log(`  DEBUG: Potential fix for ${path}`);
            const potentialDirPath = resolve(fileDir, path);
            const potentialFilePathJs = potentialDirPath + '.js';

            let isDirectory = false;
            let isFileEndingInJs = false;

            try {
                const dirStats = await Deno.stat(potentialDirPath);
                isDirectory = dirStats.isDirectory;
                if (filePath.includes('ffe-form-react/src/index.ts')) console.log(`    DEBUG: ${potentialDirPath} isDirectory: ${isDirectory}`);
            } catch (e) {
                if (!(e instanceof Deno.errors.NotFound)) {
                     console.warn(`  - WARN: Stat error for dir ${potentialDirPath}: ${e.message}`);
                }
            }

            if (!isDirectory) {
                 try {
                     await Deno.stat(potentialFilePathJs);
                     isFileEndingInJs = true;
                     if (filePath.includes('ffe-form-react/src/index.ts')) console.log(`    DEBUG: ${potentialFilePathJs} exists (isFileEndingInJs: true)`);
                 } catch (e) {
                     if (!(e instanceof Deno.errors.NotFound)) {
                          console.warn(`  - WARN: Stat error for file ${potentialFilePathJs}: ${e.message}`);
                     }
                 }
            }

            let replacement = '';
            if (isDirectory) {
                replacement = `${prefix}${path}/index.js${suffix}`;
                console.log(`  - Planning dir fix in ${filePath}: ${fullMatch} -> ${replacement}`);
            } else if (isFileEndingInJs) {
                 // Already ends in .js (likely from previous run or manual fix), keep it
                 console.log(`  - Keeping file import in ${filePath}: ${fullMatch}`);
                 replacement = fullMatch; // No change needed for this specific match
             } else {
                replacement = `${prefix}${path}.js${suffix}`;
                console.log(`  - Planning file fix in ${filePath}: ${fullMatch} -> ${replacement}`);
            }

            // Only add to replacements if there's an actual change
            if (replacement !== fullMatch) {
                replacements.push({ find: fullMatch, replaceWith: replacement });
            }
        }

        // --- Step 3: Apply replacements ---
        if (replacements.length > 0) {
            changed = true;
            for (const r of replacements) {
                 // Use replaceAll for robustness against multiple identical imports
                 newContent = newContent.replaceAll(r.find, r.replaceWith);
            }
            await Deno.writeTextFile(filePath, newContent);
            filesModified++;
        }

    } catch (error) {
        console.error(`Error processing file ${entry.path}:`, error);
    }
}

console.log(`
Finished! Checked ${filesChecked} files, modified ${filesModified} files.`); 