#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);

function generateLiveCodeStory(componentName, packageName, additionalComponents = []) {
    const storageKey = componentName.toLowerCase();
    const additionalImports = additionalComponents.map(comp => 
        `import { ${comp} } from './${comp}';`
    ).join('\n');
    
    const additionalComponentsConfig = additionalComponents.length > 0 
        ? `additionalComponents: {\n        ${additionalComponents.join(',\n        ')}\n    },` 
        : '';

    return `import type { StoryObj, Meta } from '@storybook/react';
import { ${componentName} } from './${componentName}';
${additionalImports}
import { createLiveCodeStory } from '../../../.storybook/shared/LiveCodeEditor';

const meta: Meta<typeof ${componentName}> = {
    title: 'Komponenter/${componentName}/Live Code Editor',
    component: ${componentName},
    parameters: {
        docs: {
            description: {
                component: 'Interaktiv live code editor for ${componentName} komponenten.',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof ${componentName}>;

// Define templates for ${componentName}
const ${storageKey}Templates = {
    simple: {
        name: 'Enkelt',
        icon: '📝',
        code: \`<${componentName}>
    Grunnleggende eksempel
</${componentName}>\`
    },
    // Add more templates as needed
};

export const LiveCodeEditor: Story = createLiveCodeStory(${componentName}, {
    templates: ${storageKey}Templates,${additionalComponentsConfig ? '\n    ' + additionalComponentsConfig : ''}
    defaultTemplate: 'simple',
    title: '${componentName} Live Code Editor',
    description: 'Interaktiv editor for ${componentName} komponenten.'
});`;
}

async function main() {
    const [, , componentName, packagePath, ...additionalComponents] = process.argv;
    
    if (!componentName || !packagePath) {
        console.error('Bruk: node scripts/generate-livecode.js <ComponentName> <package-path> [AdditionalComponent1] [AdditionalComponent2]...');
        console.error('Eksempel: node scripts/generate-livecode.js Button packages/ffe-buttons-react');
        console.error('Eksempel: node scripts/generate-livecode.js Accordion packages/ffe-accordion-react AccordionItem');
        process.exit(1);
    }

    const packageDir = path.resolve(packagePath);
    const srcDir = path.join(packageDir, 'src');
    
    if (!fs.existsSync(srcDir)) {
        console.error(`Feil: ${srcDir} eksisterer ikke`);
        process.exit(1);
    }

    const fileName = `${componentName}.livecode.stories.tsx`;
    const filePath = path.join(srcDir, fileName);
    
    if (fs.existsSync(filePath)) {
        console.error(`Feil: ${filePath} eksisterer allerede`);
        process.exit(1);
    }

    const content = generateLiveCodeStory(componentName, packagePath, additionalComponents);
    
    try {
        await writeFile(filePath, content);
        console.log(`✅ Opprettet: ${filePath}`);
        console.log('');
        console.log('📝 Neste steg:');
        console.log('1. Rediger templates i den nye filen');
        console.log('2. Legg til flere eksempler etter behov');
        console.log('3. Test i Storybook');
    } catch (error) {
        console.error(`Feil ved oppretting av fil: ${error.message}`);
        process.exit(1);
    }
}

if (require.main === module) {
    main();
} 