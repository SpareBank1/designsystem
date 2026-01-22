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

    // Extract interface or type for component props
    const propsPattern = new RegExp(
        `(?:export\\s+)?(?:interface|type)\\s+${componentName}(?:Props|Prop)[^{]*{([^}]+)}`,
        's',
    );
    const propsMatch = tsxContent.match(propsPattern);

    if (propsMatch) {
        info.interface = propsMatch[0];

        // Extract individual props with comments
        const propsText = propsMatch[1];
        const propLines = propsText.split('\n').filter(line => {
            const t = line.trim();
            if (!t) return false;
            // skip pure comment lines
            if (t.startsWith('/**') || t.startsWith('*') || t.startsWith('*/'))
                return false;
            // only consider lines that look like TS property declarations
            return /:\s*/.test(t) && /^\w/.test(t);
        });

        for (const line of propLines) {
            const propMatch = line.match(/^\s*(\w+)(\??)\s*:\s*([^;]+)/);
            if (propMatch) {
                const [, name, optional, type] = propMatch;
                info.props.push({
                    name,
                    type: type.trim(),
                    optional: !!optional,
                    description: '',
                });
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
        // Try explicit Description section
        const descSectionMatch = readmeContent.match(
            /^##\s+Description\n([\s\S]*?)(?=^##\s+|\Z)/m,
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
        // Description must come from README's `## Description` section only

        // Extract Examples: prefer explicit Examples section, else code blocks under Usage
        const examplesSectionMatch = readmeContent.match(
            /^##\s+Examples\n([\s\S]*?)(?=^##\s+|\Z)/m,
        );
        const sourceForExamples = examplesSectionMatch
            ? examplesSectionMatch[1]
            : readmeContent.match(
                  /^##\s+Usage\n([\s\S]*?)(?=^##\s+|\Z)/m,
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
                manualExamples = `## Manual Examples (from README)${codeBlocks}\n\n`;
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
    content += `## Description\n\n${description || 'React component library for SpareBank 1 Design System.'}\n\n`;

    if (mainComponentsFiltered.length > 0) {
        content += `## Components\n\nThis package exports the following components:\n\n`;
        mainComponentsFiltered.forEach(comp => {
            content += `- \`${comp}\`\n`;
        });
        content += '\n';
    }

    content += `## Installation\n\n`;
    content += `Install the package and all its dependencies:\n\n`;
    content += `\`\`\`bash\n${installCmd}\n\`\`\`\n\n`;

    if (dependencies.length > 0) {
        content += `### Dependencies\n\nThis package depends on:\n\n`;
        dependencies.forEach(dep => {
            content += `- \`${dep}\`\n`;
        });
        content += '\n';
    }

    if (cssImports) {
        content += `## CSS Import\n\n`;
        content += `In your project's main CSS file, import the required styles:\n\n`;
        content += `\`\`\`css\n${cssImports}\n\`\`\`\n\n`;
        content += `Note: Make sure to import \`@sb1/ffe-core/css/ffe.css\` first as it contains base styles.\n\n`;
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
        content += `## API Reference\n\n`;
        for (const { name, info } of apiList) {
            content += `### ${name} Props\n\n`;
            if (info && info.jsdoc && !/@deprecated/i.test(info.jsdoc)) {
                content += `${info.jsdoc}\n\n`;
            }
            if (info && info.props.length > 0) {
                content += `| Prop | Type | Required | Description |\n`;
                content += `|------|------|----------|-------------|\n`;
                for (const prop of info.props) {
                    const required = prop.optional ? 'No' : 'Yes';
                    const desc = prop.description || '-';
                    content += `| \`${prop.name}\` | \`${prop.type}\` | ${required} | ${desc} |\n`;
                }
                content += '\n';
            } else {
                content += `No component-specific props beyond native HTML attributes.\n\n`;
            }
        }
    }

    if (whenToUse) {
        content += `## When to Use\n\n${whenToUse.replace(/^#+\s*/gm, '').trim()}\n\n`;
    }

    if (whenNotToUse) {
        content += `## When NOT to Use\n\n${whenNotToUse.replace(/^#+\s*/gm, '').trim()}\n\n`;
    }

    // Append manual examples extracted from README at the bottom
    if (manualExamples) {
        content += `${manualExamples}`;
    }

    content += `## Documentation\n\n`;
    content += `Full documentation is available at https://design.sparebank1.no/\n\n`;

    content += `## Additional Context\n\n`;
    content += `This is part of the SpareBank 1 FFE (Felles Front End) design system.\n`;
    content += `All components follow SpareBank 1's design guidelines and accessibility standards.\n`;

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

let rootContent = `# SpareBank 1 FFE (Felles Front End) Design System - AI Context\n\n`;
rootContent += `## Overview\n\n`;
rootContent += `The FFE Design System is SpareBank 1's comprehensive component library for building consistent, accessible web applications. `;
rootContent += `It provides React components with corresponding CSS styles following SpareBank 1's design guidelines.\n\n`;

rootContent += `## Architecture\n\n`;
rootContent += `The design system is organized into packages:\n\n`;
rootContent += `- **React packages** (ending in \`-react\`): Contain React components\n`;
rootContent += `- **CSS packages**: Contain standalone CSS (some React packages include their own CSS)\n`;
rootContent += `- **Core packages**: Provide foundational styles, icons, and utilities\n\n`;

rootContent += `### Key Packages\n\n`;
rootContent += `- \`@sb1/ffe-core\` and \`@sb1/ffe-core-react\`: Base styles, typography, spacing\n`;
rootContent += `- \`@sb1/ffe-icons\` and \`@sb1/ffe-icons-react\`: Icon library\n\n`;
rootContent += `**Note:** The grid package (\`@sb1/ffe-grid-react\`) is deprecated and should not be used. Use modern CSS Grid or Flexbox instead.\n\n`;

rootContent += `## Component Library\n\n`;
rootContent += `Below is a complete list of all React component packages in the FFE design system.\n\n`;

// Group packages by category
const categories = {
    'Form & Input': [
        'form',
        'datepicker',
        'dropdown',
        'searchable-dropdown',
        'file-upload',
        'account-selector',
    ],
    'Buttons & Actions': ['buttons'],
    'Layout & Structure': ['cards', 'accordion', 'collapse', 'tabs'],
    'Feedback & Messages': [
        'messages',
        'message-box',
        'context-message',
        'system-message',
        'feedback',
        'modals',
    ],
    'Navigation & Controls': ['pagination', 'chips', 'tags'],
    'Data Display': [
        'tables',
        'lists',
        'progressbar',
        'spinner',
        'chart-donut',
    ],
    'Visual Elements': ['badge', 'icons', 'shapes', 'symbols'],
    'Core & Utilities': ['core', 'formatters'],
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
            rootContent += `**Components:** ${pkg.components.slice(0, 5).join(', ')}${pkg.components.length > 5 ? ', ...' : ''}\n\n`;
        }
        const shortName = pkg.name
            .replace('@sb1/', '')
            .replace('ffe-', '')
            .replace('-react', '');
        rootContent += `[View detailed documentation](./components/${shortName}.md)\n\n`;
    });
});

rootContent += `## Installation Guidelines\n\n`;
rootContent += `### Installing Components\n\n`;
rootContent += `When installing any FFE component:\n\n`;
rootContent += `1. Install the React package and all its FFE dependencies together\n`;
rootContent += `2. Import the required CSS files in your main stylesheet\n`;
rootContent += `3. Always import \`@sb1/ffe-core/css/ffe.css\` first (base styles)\n\n`;

rootContent += `Example:\n\n`;
rootContent += `\`\`\`bash\nnpm install @sb1/ffe-buttons-react @sb1/ffe-buttons @sb1/ffe-icons-react @sb1/ffe-core @sb1/ffe-icons\n\`\`\`\n\n`;

rootContent += `\`\`\`css\n@import '@sb1/ffe-core/css/ffe.css';\n@import '@sb1/ffe-buttons/css/buttons.css';\n@import '@sb1/ffe-icons/css/ffe-icons.css';\n\`\`\`\n\n`;

rootContent += `## Design Principles\n\n`;
rootContent += `### Accessibility\n- All components follow WCAG 2.1 AA standards\n- Keyboard navigation is fully supported\n- Screen reader compatibility is tested\n- Proper ARIA attributes are included\n\n`;

rootContent += `### Consistency\n- Components follow SpareBank 1's visual design language\n- Naming conventions are consistent across the system\n- Behavior patterns are predictable and standardized\n\n`;

rootContent += `### Best Practices\n- Use semantic HTML elements\n- Prefer composition over configuration\n- Keep components focused and single-purpose\n- Follow React best practices and patterns\n\n`;

rootContent += `## Common Patterns\n\n`;
rootContent += `### Button Hierarchy\n- **ActionButton**: Highest priority call-to-action (one per page)\n- **PrimaryButton**: High priority actions\n- **SecondaryButton**: Medium priority actions\n- **TertiaryButton**: Low priority actions\n\n`;

rootContent += `### Form Handling\n- Use controlled components for form inputs\n- Provide clear validation feedback\n- Show error messages inline near the input\n- Never disable buttons; show validation errors instead\n\n`;

rootContent += `### Modal Usage\n- NOT for mobile applications (use sheets instead)\n- Only for short, focused interactions\n- Always provide multiple ways to close\n- Never use for multi-step processes\n\n`;

rootContent += `## Quick Reference\n\n`;
rootContent += `For detailed information about a specific component:\n\n`;
rootContent += `1. Look up the component in the list above\n`;
rootContent += `2. Navigate to its component documentation in the components/ folder\n`;
rootContent += `3. Review installation, usage, and guidelines\n\n`;

rootContent += `## Additional Resources\n\n`;
rootContent += `- Official documentation: https://design.sparebank1.no/\n`;
rootContent += `- GitHub repository: https://github.com/SpareBank1/designsystem\n`;
rootContent += `- Component examples: https://sparebank1.github.io/designsystem\n`;

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
