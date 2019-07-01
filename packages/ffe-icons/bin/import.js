#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const optimizer = require('./optimizer');
const autoCrop = require('svg-autocrop');

const importPath = path.join(__dirname, '../import');
const destPath = path.join(__dirname, '../icons');

const crop = true;

const log = console.log;

const normalizeName = fileName => {
    let name = fileName.normalize('NFC');

    name = name.toLowerCase();
    name = name.replace('-ikon.svg', '');
    name = name.replace('.svg', '');

    name = name.replace('æ', 'ae');
    name = name.replace('ø', 'o');
    name = name.replace('å', 'aa');

    //name = name.replace(/^[a-zA-Z0-9]/, '');

    return `draft-${name}-ikon.svg`;
};

const main = async () => {
    const importFolderExists = fs.existsSync(importPath);
    const destPathExists = fs.existsSync(destPath);
    if (!importFolderExists) {
        throw new Error(`Import folder ($(importPath)) not found`);
    }

    if (!destPathExists) {
        fs.mkdirSync(destPath);
    }

    const files = await fs.readdirSync(importPath, { encoding: 'utf-8' });

    for (const file of files.filter(f => f.endsWith('.svg'))) {
        log(`Processing: ${file}...`);

        const name = normalizeName(file);
        log(name);

        const sourcePath = path.join(importPath, file);
        const targetPath = path.join(destPath, name);

        log(`- Reading source file: ${sourcePath}`);
        const fileContent = fs.readFileSync(sourcePath, 'UTF-8');

        log('- Optimizing svg');
        const optimizationResult = await optimizer.optimize(fileContent);
        let optimizedContent = optimizationResult.data;

        if (crop) {
            log('- Autocropping svg');
            optimizedContent = await autoCrop(optimizedContent);
        }

        log(`- Writing target file: ${targetPath}`);
        fs.writeFileSync(targetPath, optimizedContent);

        log(`Processing: ${file}... done`);
    }

    process.exit(0);
};

main();
