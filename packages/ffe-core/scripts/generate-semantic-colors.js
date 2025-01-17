#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const writeToFile = require('./lib/writeToFile');

const usedPrimitive = {};
const usedSemantic = {};

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
    contextAccentJsonFile,
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
                const cssVarValue = value.$value.startsWith('{')
                    ? `var(--ffe-${value.$value
                          .slice(1, -1)
                          .replace(/\./g, '-')
                          .replace(/ø/g, 'oe')
                          .replace(/æ/g, 'ae')
                          .replace(/å/g, 'aa')})`
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

function generateSemanticColors() {
    let cssContent = '// Generated from Figma tokens';
    cssContent += `\n\n// Context accent \n.accent {\n${convertContextJsonToCss(filePath(files.contextAccent)).join('\n')}}\n`;
    cssContent += `\n\n// Context \n:root,\n:host {\n${convertContextJsonToCss(filePath(files.context)).join('\n')}}\n`;
    cssContent += `\n\n${convertSemanticJsonToCss(filePath(files.semanticLight))}`;
    cssContent += `\n\n${convertSemanticJsonToCss(filePath(files.semanticDark), filePath(files.context), filePath(files.contextAccent))}`;
    cssContent += `\n\n${convertPrimitivesJsonToCss(filePath(files.primitive))}`;

    writeToFile('less/colors-semantic.less')(cssContent);
    writeToFile('css/colors-semantic.css')(cssContent);

    const storybookCssContent = convertSemanticJsonToCss(
        filePath(files.semanticDark),
        filePath(files.context),
        filePath(files.contextAccent),
        true,
    );
    writeToFile('less/colors-semantic-storybook.less')(storybookCssContent);
}

generateSemanticColors();
