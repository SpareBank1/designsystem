#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Package styles mapping from InstallImport.tsx
const packageStyles = {
    '@sb1/ffe-accordion': { less: '@sb1/ffe-accordion/less/ffe-accordion' },
    '@sb1/ffe-collapse-react': {
        less: '@sb1/ffe-collapse-react/less/collapse',
    },
    '@sb1/ffe-core': { less: '@sb1/ffe-core/less/ffe' },
    '@sb1/ffe-icons': { less: '@sb1/ffe-icons/less/ffe-icons' },
    '@sb1/ffe-searchable-dropdown-react': {
        less: '@sb1/ffe-searchable-dropdown-react/less/searchable-dropdown',
    },
    '@sb1/ffe-form': { less: '@sb1/ffe-form/less/form' },
    '@sb1/ffe-chips': { less: '@sb1/ffe-chips/less/chip' },
    '@sb1/ffe-buttons': { less: '@sb1/ffe-buttons/less/buttons' },
    '@sb1/ffe-spinner': { less: '@sb1/ffe-spinner/less/spinner' },
    '@sb1/ffe-badge': { less: '@sb1/ffe-badge/less/badge' },
    '@sb1/ffe-cards': { less: '@sb1/ffe-cards/less/cards' },
    '@sb1/ffe-chart-donut-react': {
        less: '@sb1/ffe-chart-donut-react/less/ffe-chart-donut',
    },
    '@sb1/ffe-datepicker': { less: '@sb1/ffe-datepicker/less/datepicker' },
    '@sb1/ffe-feedback': { less: '@sb1/ffe-feedback/less/feedback' },
    '@sb1/ffe-file-upload': { less: '@sb1/ffe-file-upload/less/file-upload' },
    '@sb1/ffe-grid': { less: '@sb1/ffe-grid/less/ffe-grid' },
    '@sb1/ffe-lists': { less: '@sb1/ffe-lists/less/lists' },
    '@sb1/ffe-messages': { less: '@sb1/ffe-messages/less/messages' },
    '@sb1/ffe-modals': { less: '@sb1/ffe-modals/less/modal' },
    '@sb1/ffe-pagination': { less: '@sb1/ffe-pagination/less/pagination' },
    '@sb1/ffe-shapes': { less: '@sb1/ffe-shapes/less/shapes' },
    '@sb1/ffe-tables': { less: '@sb1/ffe-tables/less/tables' },
    '@sb1/ffe-tabs': { less: '@sb1/ffe-tabs/less/tabs' },
    '@sb1/ffe-tags': { less: '@sb1/ffe-tags/less/tag' },
    '@sb1/ffe-progressbar': { less: '@sb1/ffe-progressbar/less/progressbar' },
};

const packagesDir = path.join(__dirname, '../packages');

// Get all -react package directories
const reactPackages = fs
    .readdirSync(packagesDir)
    .filter(dir => dir.endsWith('-react') && dir !== 'ffe-grid-react') // Exclude grid
    .map(dir => path.join(packagesDir, dir));

function getCssImports(packageName, dependencies) {
    const allPackages = [packageName, ...dependencies].filter(
        pkg => pkg !== '@sb1/ffe-grid' && pkg !== '@sb1/ffe-grid-react',
    );
    const cssImports = allPackages
        .map(dep => packageStyles[dep])
        .filter(Boolean)
        .sort((a, b) =>
            a.less === '@sb1/ffe-core/less/ffe'
                ? -1
                : b.less === '@sb1/ffe-core/less/ffe'
                  ? 1
                  : a.less.localeCompare(b.less),
        )
        .map(dep => `@import '${dep.less.replace('/less/', '/css/')}.css';`)
        .join('\n');

    return cssImports;
}

function extractTypeInfo(tsxContent, componentName) {
    if (!tsxContent) return null;

    const info = {
        props: [],
        jsdoc: '',
        interface: '',
        deprecated: false,
    };

    // Find the start of the interface/type definition
    const interfacePattern = new RegExp(
        `(?:export\\s+)?(?:interface|type)\\s+${componentName}(?:Props|Prop)`,
    );
    const interfaceMatch = tsxContent.match(interfacePattern);

    if (interfaceMatch) {
        const startIndex = interfaceMatch.index + interfaceMatch[0].length;
        // Find the opening brace
        const braceStart = tsxContent.indexOf('{', startIndex);
        if (braceStart !== -1) {
            // Balance braces to find the closing one
            let depth = 1;
            let i = braceStart + 1;
            while (i < tsxContent.length && depth > 0) {
                if (tsxContent[i] === '{') depth++;
                else if (tsxContent[i] === '}') depth--;
                i++;
            }
            const propsText = tsxContent.slice(braceStart + 1, i - 1);
            info.interface = tsxContent.slice(interfaceMatch.index, i);

            // Extract individual props with their JSDoc comments
            // First, split into prop chunks by finding top-level semicolons
            const props = [];
            let currentProp = '';
            let braceDepth = 0;
            let parenDepth = 0;
            let angleDepth = 0;

            for (let j = 0; j < propsText.length; j++) {
                const char = propsText[j];
                currentProp += char;

                if (char === '{') braceDepth++;
                else if (char === '}') braceDepth--;
                else if (char === '(') parenDepth++;
                else if (char === ')') parenDepth--;
                else if (char === '<') angleDepth++;
                else if (char === '>') angleDepth--;
                else if (char === ';' && braceDepth === 0 && parenDepth === 0 && angleDepth <= 0) {
                    props.push(currentProp.trim());
                    currentProp = '';
                }
            }
            if (currentProp.trim()) {
                props.push(currentProp.trim());
            }

            // Now process each prop
            let currentJsDoc = '';
            for (const propChunk of props) {
                // Extract JSDoc if present
                const jsDocMatch = propChunk.match(/\/\*\*([\s\S]*?)\*\//);
                if (jsDocMatch) {
                    currentJsDoc = jsDocMatch[1]
                        .split('\n')
                        .map(l => l.replace(/^\s*\*\s?/, '').trim())
                        .filter(l => l && !l.startsWith('@deprecated'))
                        .join(' ')
                        .trim();

                    // Skip if deprecated
                    if (jsDocMatch[1].includes('@deprecated')) {
                        currentJsDoc = '';
                        continue;
                    }
                }

                // Extract the prop declaration (after JSDoc)
                const propPart = propChunk.replace(/\/\*\*[\s\S]*?\*\//, '').trim();
                if (!propPart) continue;

                // Match property name and type
                const propMatch = propPart.match(/^['"]?([a-zA-Z_][\w-]*)['"]?(\??)\s*:\s*([\s\S]+?);?$/);
                if (propMatch) {
                    let [, name, optional, type] = propMatch;
                    type = type.trim();

                    // Clean up type - remove newlines and extra whitespace
                    type = type.replace(/\s+/g, ' ').trim();

                    // Simplify complex types for display
                    if (type.includes('{') || type.length > 60) {
                        // Count braces to determine if it's an object type
                        if (type.startsWith('{')) {
                            type = 'object';
                        } else if (type.includes('<{') || type.includes('ComponentType')) {
                            type = 'React.ComponentType';
                        } else if (type.includes('=>')) {
                            type = 'function';
                        } else {
                            type = type.substring(0, 57) + '...';
                        }
                    }

                    info.props.push({
                        name,
                        type,
                        optional: !!optional,
                        description: currentJsDoc,
                    });
                }
                currentJsDoc = '';
            }
        }
    }

    // Extract JSDoc comment before component
    const jsdocPattern =
        /\/\*\*\s*([\s\S]*?)\s*\*\/\s*(?:export\s+)?(?:const|function)\s+\w+/;
    const jsdocMatch = tsxContent.match(jsdocPattern);
    if (jsdocMatch) {
        info.jsdoc = jsdocMatch[1]
            .split('\n')
            .map(line => line.replace(/^\s*\*\s?/, ''))
            .join('\n')
            .trim();
        if (/@deprecated/i.test(info.jsdoc)) {
            info.deprecated = true;
        }
    }

    return info;
}

function findComponentFiles(packageDir) {
    const srcDir = path.join(packageDir, 'src');
    if (!fs.existsSync(srcDir)) return [];

    const results = [];

    /** Recursively walk directories to gather .tsx files (excluding tests/stories) */
    function walk(dir) {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
            const full = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                walk(full);
            } else if (
                entry.isFile() &&
                entry.name.endsWith('.tsx') &&
                !entry.name.includes('.spec.') &&
                !entry.name.includes('.stories.')
            ) {
                results.push(full);
            }
        }
    }

    walk(srcDir);
    return results;
    // Exclude deprecated components based on extracted type info
    const mainComponentsFiltered = mainComponents.filter(
        c => !(typeInfos[c] && typeInfos[c].deprecated),
    );

    // Find main component .tsx files (not test files, not stories)
    return files
        .filter(
            f =>
                f.endsWith('.tsx') &&
                !f.includes('.spec.') &&
                !f.includes('.stories.'),
        )
        .map(f => path.join(srcDir, f));
}

function extractUsageInfo(mdxContent, readmeContent) {
    let description = '';
    let whenToUse = '';
    let whenNotToUse = '';
    let manualExamples = '';

    // MDX: Only used for usage guidelines (not for description)
    if (mdxContent) {
        const usageSection = mdxContent.match(/##\s+Bruk av[^#]*/i);
        if (usageSection) {
            whenToUse = usageSection[0];
        }
        const gjorSann = mdxContent.match(/###\s+Gjør sånn:[^#]*/i);
        if (gjorSann) {
            whenToUse += '\n\n' + gjorSann[0];
        }
        const ikkeSann = mdxContent.match(/###\s+Ikke sånn:[^#]*/i);
        if (ikkeSann) {
            whenNotToUse = ikkeSann[0];
        }
        const narBrukes = mdxContent.match(
            /##\s+Når skal komponenten brukes\?[^#]*/i,
        );
        if (narBrukes) {
            whenToUse += '\n\n' + narBrukes[0];
        }
    }

    // README: Source of truth for description and examples
    if (readmeContent) {
        // Try explicit Beskrivelse section (Norwegian)
        const descSectionMatch = readmeContent.match(
            /^##\s+Beskrivelse\n([\s\S]*?)(?=^##\s+|\Z)/m,
        );
        if (descSectionMatch) {
            const firstParagraph = descSectionMatch[1]
                .split('\n')
                .map(l => l.trim())
                .filter(l => l && !l.startsWith('```'))[0];
            if (firstParagraph) {
                description = firstParagraph
                    .replace(/Full documentation.*/, '')
                    .trim();
            }
        }
        // Description must come from README's `## Beskrivelse` section only

        // Extract Examples: prefer explicit Eksempler section, else code blocks under Bruk
        const examplesSectionMatch = readmeContent.match(
            /^##\s+Eksempler\n([\s\S]*?)(?=^##\s+|\Z)/m,
        );
        const sourceForExamples = examplesSectionMatch
            ? examplesSectionMatch[1]
            : readmeContent.match(
                  /^##\s+Bruk\n([\s\S]*?)(?=^##\s+|\Z)/m,
              )?.[1] || '';
        if (sourceForExamples) {
            const codeBlocks = [
                ...sourceForExamples.matchAll(/```([a-zA-Z]*)\n([\s\S]*?)```/g),
            ]
                .slice(0, 6) // avoid dumping too much
                .map(m => {
                    const lang = m[1] || 'tsx';
                    const code = m[2].trim();
                    return `\n\n\`\`\`${lang}\n${code}\n\`\`\``;
                })
                .join('');
            if (codeBlocks) {
                manualExamples = `## Eksempler (fra README)${codeBlocks}\n\n`;
            }
        }
    }

    // Do not fall back to MDX for description; README is the sole source

    return { description, whenToUse, whenNotToUse, manualExamples };
}

function findMainMdxFile(packageDir) {
    const srcDir = path.join(packageDir, 'src');
    if (!fs.existsSync(srcDir)) return null;

    const files = fs.readdirSync(srcDir);

    // Look for main documentation files
    const mainFiles = files.filter(
        f =>
            f.endsWith('.mdx') &&
            (f.includes('s.mdx') ||
                f ===
                    path
                        .basename(packageDir)
                        .replace('-react', '')
                        .replace('ffe-', '') +
                        '.mdx'),
    );

    if (mainFiles.length > 0) {
        return path.join(srcDir, mainFiles[0]);
    }

    const firstMdx = files.find(f => f.endsWith('.mdx'));
    return firstMdx ? path.join(srcDir, firstMdx) : null;
}

function getExportedComponents(packageDir) {
    const indexPath = path.join(packageDir, 'src', 'index.ts');
    if (!fs.existsSync(indexPath)) return [];

    const content = fs.readFileSync(indexPath, 'utf-8');
    const exports = [];

    // Match export patterns
    const exportMatches = content.matchAll(/export\s+{\s*([^}]+)\s*}/g);
    for (const match of exportMatches) {
        const items = match[1]
            .split(',')
            .map(s => s.trim().split(' as ')[0])
            .filter(Boolean);
        exports.push(...items);
    }

    // Also match direct exports
    const directExports = content.matchAll(
        /export\s+.*\s+(function|const|class)\s+(\w+)/g,
    );
    for (const match of directExports) {
        exports.push(match[2]);
    }

    return [...new Set(exports)];
}

function generateCodeExample(packageName, mainComponents, dependencies) {
    const componentName = mainComponents[0] || 'Component';
    const simpleName = componentName
        .replace('Props', '')
        .replace(/^type\s+/, '');

    let example = `\`\`\`typescript\nimport { ${mainComponents.slice(0, 3).join(', ')}${mainComponents.length > 3 ? ', ...' : ''} } from '${packageName}';\n\n`;

    // Generate example based on common patterns
    if (packageName.includes('button')) {
        example += `function MyComponent() {\n  return (\n    <${simpleName} onClick={() => console.log('clicked')}>\n      Click me\n    </${simpleName}>\n  );\n}\n`;
    } else if (packageName.includes('modal')) {
        example += `function MyComponent() {\n  const modalRef = useRef<ModalHandle>(null);\n\n  return (\n    <>\n      <button onClick={() => modalRef.current?.open()}>Open Modal</button>\n      <${simpleName} ref={modalRef} ariaLabelledby="modal-title">\n        <h2 id="modal-title">Modal Title</h2>\n        <p>Modal content goes here</p>\n      </${simpleName}>\n    </>\n  );\n}\n`;
    } else if (packageName.includes('form')) {
        example += `function MyComponent() {\n  const [value, setValue] = useState('');\n\n  return (\n    <${simpleName}\n      value={value}\n      onChange={(e) => setValue(e.target.value)}\n      label="Input label"\n    />\n  );\n}\n`;
    } else {
        example += `function MyComponent() {\n  return (\n    <${simpleName}>\n      {/* Component content */}\n    </${simpleName}>\n  );\n}\n`;
    }

    example += '```';
    return example;
}

function generateAiContext(packageDir) {
    const packageName = '@sb1/' + path.basename(packageDir);

    // Read dependencies
    const depsPath = path.join(packageDir, 'ffe-dependencies.json');
    let dependencies = [];
    if (fs.existsSync(depsPath)) {
        dependencies = JSON.parse(fs.readFileSync(depsPath, 'utf-8')).filter(
            dep => dep !== '@sb1/ffe-grid' && dep !== '@sb1/ffe-grid-react',
        );
    }

    // Read README
    const readmePath = path.join(packageDir, 'README.md');
    let readmeContent = '';
    if (fs.existsSync(readmePath)) {
        readmeContent = fs.readFileSync(readmePath, 'utf-8');
    }

    // Find and read main MDX file
    const mdxPath = findMainMdxFile(packageDir);
    let mdxContent = '';
    if (mdxPath) {
        mdxContent = fs.readFileSync(mdxPath, 'utf-8');
    }

    // Extract usage information (prefer README for manual content)
    const { description, whenToUse, whenNotToUse, manualExamples } =
        extractUsageInfo(mdxContent, readmeContent);

    // Get exported components
    const components = getExportedComponents(packageDir);

    // Find main component files and extract type info
    const componentFiles = findComponentFiles(packageDir);
    const typeInfos = {};

    for (const file of componentFiles) {
        const content = fs.readFileSync(file, 'utf-8');
        const fileName = path.basename(file, '.tsx');
        const typeInfo = extractTypeInfo(content, fileName);
        if (typeInfo && (typeInfo.props.length > 0 || typeInfo.jsdoc)) {
            typeInfos[fileName] = typeInfo;
        }
    }

    // Generate CSS imports
    const cssImports = getCssImports(packageName, dependencies);

    // Generate install command
    const installCmd =
        dependencies.length > 0
            ? `npm install ${packageName} ${dependencies.join(' ')}`
            : `npm install ${packageName}`;

    // Find main component names (not Props types)
    const mainComponents = components.filter(
        c => !c.includes('Props') && !c.includes('type'),
    );
    // Exclude deprecated components based on extracted type info
    const mainComponentsFiltered = mainComponents.filter(
        c => !(typeInfos[c] && typeInfos[c].deprecated),
    );

    // Build the AI context document
    let content = `# ${packageName}\n\n`;
    content += `## Beskrivelse\n\n${description || 'React-komponentbibliotek for SpareBank 1 sitt designsystem.'}\n\n`;

    if (mainComponentsFiltered.length > 0) {
        content += `## Komponenter\n\nDenne pakken eksporterer følgende komponenter:\n\n`;
        mainComponentsFiltered.forEach(comp => {
            content += `- \`${comp}\`\n`;
        });
        content += '\n';
    }

    content += `## Installasjon\n\n`;
    content += `Installer pakken og alle dens avhengigheter:\n\n`;
    content += `\`\`\`bash\n${installCmd}\n\`\`\`\n\n`;

    if (dependencies.length > 0) {
        content += `### Avhengigheter\n\nDenne pakken er avhengig av:\n\n`;
        dependencies.forEach(dep => {
            content += `- \`${dep}\`\n`;
        });
        content += '\n';
    }

    if (cssImports) {
        content += `## CSS-import\n\n`;
        content += `I prosjektets hoved-CSS-fil, importer de nødvendige stilene:\n\n`;
        content += `\`\`\`css\n${cssImports}\n\`\`\`\n\n`;
        content += `Merk: Sørg for å importere \`@sb1/ffe-core/css/ffe.css\` først, da den inneholder grunnleggende stiler.\n\n`;
    }

    // Basic Usage section removed

    // Add API Reference for exported components (skip deprecated ones)
    const apiList = mainComponentsFiltered.map(name => {
        const baseKey = typeInfos[name]
            ? name
            : name.startsWith('Heading')
              ? 'Heading'
              : null;
        const info = baseKey ? typeInfos[baseKey] : null;
        return { name, info };
    });
    if (apiList.length > 0) {
        content += `## API-referanse\n\n`;
        for (const { name, info } of apiList) {
            content += `### ${name} Props\n\n`;
            if (info && info.jsdoc && !/@deprecated/i.test(info.jsdoc)) {
                content += `${info.jsdoc}\n\n`;
            }
            if (info && info.props.length > 0) {
                content += `| Prop | Type | Påkrevd | Beskrivelse |\n`;
                content += `|------|------|---------|-------------|\n`;
                for (const prop of info.props) {
                    const required = prop.optional ? 'Nei' : 'Ja';
                    const desc = prop.description || '-';
                    content += `| \`${prop.name}\` | \`${prop.type}\` | ${required} | ${desc} |\n`;
                }
                content += '\n';
            } else {
                content += `Ingen komponentspesifikke props utover native HTML-attributter.\n\n`;
            }
        }
    }

    if (whenToUse) {
        content += `## Når bør du bruke\n\n${whenToUse.replace(/^#+\s*/gm, '').trim()}\n\n`;
    }

    if (whenNotToUse) {
        content += `## Når bør du ikke bruke\n\n${whenNotToUse.replace(/^#+\s*/gm, '').trim()}\n\n`;
    }

    // Append manual examples extracted from README at the bottom
    if (manualExamples) {
        content += `${manualExamples}`;
    }

    content += `## Dokumentasjon\n\n`;
    content += `Full dokumentasjon er tilgjengelig på https://sparebank1.github.io/designsystem/\n\n`;

    content += `## Tilleggskontekst\n\n`;
    content += `Dette er en del av SpareBank 1 FFE (Felles Front End) designsystem.\n`;
    content += `Alle komponenter følger SpareBank 1s designretningslinjer og tilgjengelighetsstandarder.\n`;

    return content;
}

// Generate ai-context.md for each package
console.log('Generating AI context documentation for all React packages...\n');

// Ensure mcp-context directory exists
const mcpContextDir = path.join(__dirname, '../mcp-context');
const componentsDir = path.join(mcpContextDir, 'components');
if (fs.existsSync(mcpContextDir)) {
    fs.rmSync(mcpContextDir, { recursive: true, force: true });
}
fs.mkdirSync(componentsDir, { recursive: true });

const packageSummaries = [];
const resources = [];

reactPackages.forEach(packageDir => {
    const packageName =
        '@sb1/ffe' + path.basename(packageDir).replace('ffe', '');
    const shortName = path
        .basename(packageDir)
        .replace('ffe-', '')
        .replace('-react', '');

    console.log(`Processing ${packageName}...`);

    const content = generateAiContext(packageDir);

    // Write to mcp-context/components directory
    const packageOutputPath = path.join(componentsDir, `${shortName}.md`);
    fs.writeFileSync(packageOutputPath, content, 'utf-8');
    console.log(`  ✓ Created mcp-context/components/${shortName}.md\n`);

    // Add to resources list
    resources.push({
        uri: `ffe://component/${shortName}`,
        name: packageName,
        description:
            content
                .split('\n')
                .find(line => line.startsWith('## Description'))
                ?.split('\n')[2] || '',
        mimeType: 'text/markdown',
    });

    // Store summary for root document
    const depsPath = path.join(packageDir, 'ffe-dependencies.json');
    let dependencies = [];
    if (fs.existsSync(depsPath)) {
        dependencies = JSON.parse(fs.readFileSync(depsPath, 'utf-8')).filter(
            dep => dep !== '@sb1/ffe-grid' && dep !== '@sb1/ffe-grid-react',
        );
    }

    const mdxPath = findMainMdxFile(packageDir);
    let description = '';
    const readmePath = path.join(packageDir, 'README.md');
    const readmeForSummary = fs.existsSync(readmePath)
        ? fs.readFileSync(readmePath, 'utf-8')
        : '';
    const mdxForSummary = mdxPath ? fs.readFileSync(mdxPath, 'utf-8') : '';
    const info = extractUsageInfo(mdxForSummary, readmeForSummary);
    description = info.description;

    packageSummaries.push({
        name: packageName,
        description,
        components: getExportedComponents(packageDir).filter(
            c => !c.includes('Props') && !c.includes('type'),
        ),
    });
});

// Generate root ai-context.md
console.log('\nGenerating root AI context...');

let rootContent = `# SpareBank 1 FFE (Felles Front End) Designsystem - AI-kontekst\n\n`;
rootContent += `## Oversikt\n\n`;
rootContent += `FFE-designsystemet er SpareBank 1s omfattende komponentbibliotek for å bygge konsistente, tilgjengelige webapplikasjoner. `;
rootContent += `Det tilbyr React-komponenter med tilhørende CSS-stiler som følger SpareBank 1s designretningslinjer.\n\n`;

rootContent += `## Arkitektur\n\n`;
rootContent += `Designsystemet er organisert i pakker:\n\n`;
rootContent += `- **React-pakker** (slutter med \`-react\`): Inneholder React-komponenter\n`;
rootContent += `- **CSS-pakker**: Inneholder frittstående CSS (noen React-pakker inkluderer egen CSS)\n`;
rootContent += `- **Kjernepakker**: Tilbyr grunnleggende stiler, ikoner og verktøy\n\n`;

rootContent += `### Viktige pakker\n\n`;
rootContent += `- \`@sb1/ffe-core\` og \`@sb1/ffe-core-react\`: Grunnstiler, typografi, spacing\n`;
rootContent += `- \`@sb1/ffe-icons\` og \`@sb1/ffe-icons-react\`: Ikonbibliotek\n\n`;
rootContent += `**Merk:** Grid-pakken (\`@sb1/ffe-grid-react\`) er foreldet og bør ikke brukes. Bruk moderne CSS Grid eller Flexbox i stedet.\n\n`;

rootContent += `## Komponentbibliotek\n\n`;
rootContent += `Nedenfor er en komplett liste over alle React-komponentpakker i FFE-designsystemet.\n\n`;

// Group packages by category
const categories = {
    'Skjema og input': [
        'form',
        'datepicker',
        'dropdown',
        'searchable-dropdown',
        'file-upload',
        'account-selector',
    ],
    'Knapper og handlinger': ['buttons'],
    'Layout og struktur': ['cards', 'accordion', 'collapse', 'tabs'],
    'Tilbakemelding og meldinger': [
        'messages',
        'message-box',
        'context-message',
        'system-message',
        'feedback',
        'modals',
    ],
    'Navigasjon og kontroller': ['pagination', 'chips', 'tags'],
    'Datavisning': [
        'tables',
        'lists',
        'progressbar',
        'spinner',
        'chart-donut',
    ],
    'Visuelle elementer': ['badge', 'icons', 'shapes', 'symbols'],
    'Kjerne og verktøy': ['core', 'formatters'],
};

Object.entries(categories).forEach(([category, keywords]) => {
    rootContent += `### ${category}\n\n`;

    const matchingPackages = packageSummaries.filter(pkg =>
        keywords.some(kw => pkg.name.includes(kw)),
    );

    matchingPackages.forEach(pkg => {
        rootContent += `#### ${pkg.name}\n\n`;
        if (pkg.description) {
            rootContent += `${pkg.description}\n\n`;
        }
        if (pkg.components.length > 0) {
            rootContent += `**Komponenter:** ${pkg.components.slice(0, 5).join(', ')}${pkg.components.length > 5 ? ', ...' : ''}\n\n`;
        }
        const shortName = pkg.name
            .replace('@sb1/', '')
            .replace('ffe-', '')
            .replace('-react', '');
        rootContent += `[Se detaljert dokumentasjon](./components/${shortName}.md)\n\n`;
    });
});

rootContent += `## Installasjonsveiledning\n\n`;
rootContent += `### Installere komponenter\n\n`;
rootContent += `Når du installerer en FFE-komponent:\n\n`;
rootContent += `1. Installer React-pakken og alle dens FFE-avhengigheter sammen\n`;
rootContent += `2. Importer de nødvendige CSS-filene i hovedstilarket ditt\n`;
rootContent += `3. Importer alltid \`@sb1/ffe-core/css/ffe.css\` først (grunnstiler)\n\n`;

rootContent += `Eksempel:\n\n`;
rootContent += `\`\`\`bash\nnpm install @sb1/ffe-buttons-react @sb1/ffe-buttons @sb1/ffe-icons-react @sb1/ffe-core @sb1/ffe-icons\n\`\`\`\n\n`;

rootContent += `\`\`\`css\n@import '@sb1/ffe-core/css/ffe.css';\n@import '@sb1/ffe-buttons/css/buttons.css';\n@import '@sb1/ffe-icons/css/ffe-icons.css';\n\`\`\`\n\n`;

rootContent += `## Designprinsipper\n\n`;
rootContent += `### Tilgjengelighet\n- Alle komponenter følger WCAG 2.1 AA-standarden\n- Tastaturnavigasjon er fullt støttet\n- Skjermleserkompatibilitet er testet\n- Korrekte ARIA-attributter er inkludert\n\n`;

rootContent += `### Konsistens\n- Komponenter følger SpareBank 1s visuelle designspråk\n- Navnekonvensjoner er konsistente på tvers av systemet\n- Atferdsmønstre er forutsigbare og standardiserte\n\n`;

rootContent += `### Beste praksis\n- Bruk semantiske HTML-elementer\n- Foretrekk komposisjon fremfor konfigurasjon\n- Hold komponenter fokuserte og med ett formål\n- Følg Reacts beste praksis og mønstre\n\n`;

rootContent += `## Vanlige mønstre\n\n`;
rootContent += `### Knapphierarki\n- **ActionButton**: Høyeste prioritet call-to-action (én per side)\n- **PrimaryButton**: Høy prioritet handlinger\n- **SecondaryButton**: Medium prioritet handlinger\n- **TertiaryButton**: Lav prioritet handlinger\n\n`;

rootContent += `### Skjemahåndtering\n- Bruk kontrollerte komponenter for skjemainput\n- Gi tydelig valideringsfeedback\n- Vis feilmeldinger inline nær input-feltet\n- Aldri deaktiver knapper; vis valideringsfeil i stedet\n\n`;

rootContent += `### Modal-bruk\n- IKKE for mobilapplikasjoner (bruk sheets i stedet)\n- Kun for korte, fokuserte interaksjoner\n- Tilby alltid flere måter å lukke på\n- Aldri bruk for flerstegsprosesser\n\n`;

rootContent += `## Hurtigreferanse\n\n`;
rootContent += `For detaljert informasjon om en spesifikk komponent:\n\n`;
rootContent += `1. Finn komponenten i listen over\n`;
rootContent += `2. Naviger til komponentdokumentasjonen i components/-mappen\n`;
rootContent += `3. Gjennomgå installasjon, bruk og retningslinjer\n\n`;

rootContent += `## Tilleggsressurser\n\n`;
rootContent += `- Offisiell dokumentasjon: https://sparebank1.github.io/designsystem/\n`;
rootContent += `- GitHub-repository: https://github.com/SpareBank1/designsystem\n`;
rootContent += `- Komponenteksempler: https://sparebank1.github.io/designsystem\n`;

const rootOutputPath = path.join(mcpContextDir, 'overview.md');
fs.writeFileSync(rootOutputPath, rootContent, 'utf-8');
console.log(`✓ Created mcp-context/overview.md\n`);

// Add overview to resources
resources.unshift({
    uri: 'ffe://overview',
    name: 'FFE Design System Overview',
    description: 'Complete overview of the SpareBank 1 FFE Design System',
    mimeType: 'text/markdown',
});

// Generate ai-context-resources.json
const resourcesManifest = {
    resources: resources,
};

const resourcesPath = path.join(mcpContextDir, 'ai-context-resources.json');
fs.writeFileSync(
    resourcesPath,
    JSON.stringify(resourcesManifest, null, 2),
    'utf-8',
);
console.log(`✓ Created mcp-context/ai-context-resources.json\n`);

console.log('Done! Generated enhanced AI context documentation.');
console.log(`Total components documented: ${resources.length - 1}`);
console.log(`All files written to: ${mcpContextDir}/`);
