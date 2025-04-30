#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const writeToFile = require('./lib/writeToFile.cjs');
const generateChevronColors = require('./chevron.cjs');

const usedPrimitive = {};
const usedSemantic = {};
const semanticColorNames = [];

const files = {
    primitive: '01 Primitive.value.json',
    semanticLight: '02 Semantic.Light.json',
    semanticDark: '02 Semantic.Dark.json',
    context: '03 Context.Default.json',
    contextAccent: '03 Context.Accent.json',
};

const convertPrimitivesJsonToCss = jsonFile => {
    const jsonContent = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));
    const cssLines = [];

    const processColorTokens = (obj, prefix = '') => {
        for (const [key, value] of Object.entries(obj)) {
            if (value.$type === 'color') {
                const cssVarName = `--ffe-color-${prefix}${key}`
                    .replace(/\./g, '-')
                    .replace(/ø/g, 'oe')
                    .replace(/æ/g, 'ae')
                    .replace(/å/g, 'aa');
                if (usedPrimitive[`var(${cssVarName})`]) {
                    cssLines.push(`${cssVarName}: ${value.$value};`);
                }
            } else if (typeof value === 'object') {
                processColorTokens(value, `${prefix}${key}-`);
            }
        }
    };

    if (jsonContent.color) {
        processColorTokens(jsonContent.color);
    }

    const cssContent = `:root,\n:host {\n${cssLines.join('\n')}\n}`;
    return cssContent;
};

const convertContextJsonToCss = jsonFile => {
    const jsonContent = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));
    const cssLines = [];
    const saveColors = semanticColorNames.length === 0;

    const processColorTokens = (obj, prefix = '') => {
        for (const [key, value] of Object.entries(obj)) {
            if (value.$type === 'color') {
                const cssVarName = `--ffe-color-${prefix}${key}`
                    .replace(/\./g, '-')
                    .toLowerCase();
                const cssVarValue = value.$value.startsWith('{')
                    ? `var(--ffe-color-${value.$value
                          .slice(1, -1)
                          .replace(/\./g, '-')
                          .replace(/color-/g, '')
                          .replace(/ø/g, 'oe')
                          .replace(/æ/g, 'ae')
                          .replace(/å/g, 'aa')})`
                    : value.$value;
                cssLines.push(`${cssVarName}: ${cssVarValue};`);
                usedSemantic[cssVarValue] = true;
                if (saveColors) semanticColorNames.push(cssVarName);
            } else if (typeof value === 'object') {
                processColorTokens(value, `${prefix}${key}-`);
            }
        }
    };

    if (jsonContent.color) {
        processColorTokens(jsonContent.color);
    }

    return cssLines;
};

const convertSemanticJsonToCss = (
    jsonFile,
    contextJsonFile,
    isStorybook = false,
) => {
    const jsonContent = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));
    const cssLines = [];

    const isDarkMode = !!contextJsonFile;

    const processColorTokens = (obj, prefix = '') => {
        for (const [key, value] of Object.entries(obj)) {
            if (value.$type === 'color') {
                const cssVarName = `--ffe-color-${prefix}${key}`
                    .replace(/\s./g, '-')
                    .replace(/ø/g, 'oe')
                    .replace(/æ/g, 'ae')
                    .replace(/å/g, 'aa');
                const newValue = value.$value
                    .slice(1, -1)
                    .replace(/\./g, '-')
                    .replace(/ø/g, 'oe')
                    .replace(/æ/g, 'ae')
                    .replace(/å/g, 'aa');

                if (!newValue.includes('color')) {
                    throw new Error(
                        'Fargevariabelen finnes ikke i primitive. Dobbeltsjekk Figma, kanskje en farge er referert til inad i det semantiske laget?',
                    );
                }
                const cssVarValue = value.$value.startsWith('{')
                    ? `var(--ffe-${newValue})`
                    : value.$value;

                if (usedSemantic[`var(${cssVarName})`]) {
                    cssLines.push(`${cssVarName}: ${cssVarValue};`);
                    usedPrimitive[cssVarValue] = true;
                }
            } else if (typeof value === 'object') {
                processColorTokens(value, `${prefix}${key}-`);
            }
        }
    };

    processColorTokens(jsonContent);

    let cssContent;
    if (isDarkMode) {
        const contextCssLines = convertContextJsonToCss(contextJsonFile);
        if (isStorybook) {
            cssContent = `// Semantic dark class \n.dark-mode {\n${cssLines.join('\n')}\n\n}`;

            cssContent = `// Semantic dark class \n.dark-mode {\n${cssLines.join('\n')}\n//inlined context to make darkmode work\n${contextCssLines.join('\n')}\n}`;
        } else {
            cssContent = `// Semantic dark \n  @media (prefers-color-scheme: dark) {\n:where(.regard-color-scheme-preference){\n${cssLines.join('\n')}\n//inlined context to make darkmode work\n${contextCssLines.join('\n')}}\n}`;
        }
    } else {
        cssContent = `// Semantic \n :root,\n:host {\n${cssLines.join('\n')}\n}`;
    }
    return cssContent;
};

function filePath(filename) {
    return path.resolve('tokens', filename);
}

function transformColorName(colorName) {
    return colorName
        .replace('--ffe-color-', '')
        .split('-')
        .map((word, index) =>
            index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1),
        )
        .join('');
}

function transformColorNameTW(colorName) {
    return colorName.replace('--ffe-color-', '');
}

function generateSemanticColorModule(_semanticColorNames) {
    let moduleContent = `"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

`;
    let moduleVars = '';

    _semanticColorNames.forEach(colorName => {
        const transformedName = transformColorName(colorName);
        moduleVars += `exports.${transformedName} = 'var(${colorName})';\n`;
        moduleContent += `exports.${transformedName} = `;
    });

    moduleContent += 'void 0\n';
    moduleContent += moduleVars;

    return moduleContent;
}

function generateSemanticColorTWModule(_semanticColorNames) {
    let moduleContent = `"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

`;
    let moduleVars = '';

    _semanticColorNames.forEach(colorName => {
        const transformedName = transformColorNameTW(colorName);
        moduleVars += `exports['${transformedName}'] = 'var(${colorName})';\n`;
        moduleContent += `exports['${transformedName}'] = `;
    });

    moduleContent += 'void 0\n';
    moduleContent += moduleVars;

    return moduleContent;
}

function generateSemanticColors() {
    let cssContent = '// Generated from Figma tokens';
    cssContent += `\n\n// Context accent \n.ffe-accent-mode {\n${convertContextJsonToCss(filePath(files.contextAccent)).join('\n')}}\n`;
    cssContent += `\n\n// Context \n:root,\n:host,\n.ffe-default-mode {\n${convertContextJsonToCss(filePath(files.context)).join('\n')}}\n`;
    cssContent += `\n\n${convertSemanticJsonToCss(filePath(files.semanticLight))}`;
    cssContent += `\n\n${convertSemanticJsonToCss(filePath(files.semanticDark), filePath(files.context))}`;
    cssContent += `\n\n${convertPrimitivesJsonToCss(filePath(files.primitive))}`;

    writeToFile('less/colors-semantic.less')(cssContent);
    writeToFile('css/colors-semantic.css')(cssContent);
    writeToFile('gen-src/semantic-color-names.json')(
        JSON.stringify({ colors: semanticColorNames }),
    );

    const storybookCssContent = convertSemanticJsonToCss(
        filePath(files.semanticDark),
        filePath(files.context),
        true,
    );
    writeToFile('less/colors-semantic-storybook.less')(storybookCssContent);

    // Generate and write the semantic color module
    const semanticColorModuleContent =
        generateSemanticColorModule(semanticColorNames);
    writeToFile('lib/semanticColors.js')(semanticColorModuleContent);
    const semanticColorTWModuleContent =
        generateSemanticColorTWModule(semanticColorNames);
    writeToFile('lib/semanticColorsTailwind.js')(semanticColorTWModuleContent);

    generateChevronColors();
}

generateSemanticColors();
