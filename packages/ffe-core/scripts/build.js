#!/usr/bin/env node
const path = require('path');

const writeToFile = require('./lib/writeToFile');
const renderLessVarsToCSSProps = require('./lib/renderLessVarsToCSSProps');
const extractCustomProps = require('./lib/extractCustomProps');
const { genTSSource, genTSModIndex } = require('./lib/genTypeScript');

const configFilePath = process.argv[2];

if (!configFilePath) {
    console.error('Usage: build.js path/to/build.config.js');
    process.exit(1);
}

const config = require(path.resolve(configFilePath));
const lessFiles = config.sources.map(p => path.resolve(p));

const basename = fname => path.basename(fname, '.less');
const cssFilePathFor = fname =>
    path.join(config.output.css, `${basename(fname)}.css`);
const tsFilePathFor = fname =>
    path.join(config.output.typescript, `${basename(fname)}.ts`);

const pipeline = lessFile =>
    renderLessVarsToCSSProps(lessFile)
        .then(writeToFile(cssFilePathFor(lessFile)))
        .then(extractCustomProps)
        .then(genTSSource)
        .then(writeToFile(tsFilePathFor(lessFile)));

Promise.all(lessFiles.map(pipeline))
    .then(() => genTSModIndex(lessFiles.map(basename)))
    .then(writeToFile(path.join(config.output.typescript, 'index.ts')))
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

const fs = require('node:fs');

const folders = ['css', 'less', 'ts'];
const fileNames = {
    primitives: {
        fileName: 'primitives',
        type: 'primitives',
        dataPath: '../data/primitives.json',
    },
    light: {
        fileName: 'semantic-light',
        type: 'semantic',
        dataPath: '../data/light-mode.json',
    },
    dark: {
        fileName: 'semantic-dark',
        type: 'semantic',
        darkMode: true,
        dataPath: '../data/dark-mode.json',
    },
    accent: {
        fileName: 'semantic-accent',
        type: 'semantic',
        prefix: '.ffe-accent {',
        dataPath: '../data/accent-mode.json',
    },
    accentDark: {
        fileName: 'semantic-accent-dark',
        type: 'semantic',
        darkMode: true,
        prefix: '.ffe-accent {',
        dataPath: '../data/accent-dark-mode.json',
    },
};

function createFolders() {
    folders.forEach(folder => {
        const newParentPath = path.join(__dirname, `../${folder}`);
        if (!fs.existsSync(newParentPath)) {
            fs.mkdirSync(newParentPath);
        }

        const newPath = path.join(__dirname, `../${folder}/colors`);
        if (!fs.existsSync(newPath)) {
            fs.mkdirSync(newPath);
        }
    });
}

function readFileSync(filePath) {
    try {
        return fs.readFileSync(path.join(__dirname, filePath), 'utf8');
    } catch (err) {
        console.error(err);
        return null;
    }
}

function writeFileSync(filePath, data) {
    try {
        fs.writeFileSync(path.join(__dirname, filePath), data, 'utf8');
    } catch (err) {
        console.error(err);
    }
}

function toCamelCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function generateColorVariables(semanticColors, fileType, prefix = '') {
    return Object.entries(semanticColors)
        .flatMap(([key, value]) => {
            if (
                typeof value === 'object' &&
                value !== null &&
                value.value === undefined
            ) {
                return generateColorVariables(
                    value,
                    fileType,
                    `${prefix}-${key}`,
                );
            }
            const transformedValue = value.value.replace(
                /\{color\.(.*?)\}/,
                (match, p1) => `var(--ffe-color-${p1.replace(/\./g, '-')})`,
            );
            return `${fileType === 'less' ? '@' : '--'}ffe${prefix}-${key.toLowerCase()}: ${transformedValue};`;
        })
        .join('\n');
}

function generateColorObject(semanticColors, prefix = '') {
    return Object.entries(semanticColors)
        .flatMap(([key, value]) => {
            if (
                typeof value === 'object' &&
                value !== null &&
                value.value === undefined
            ) {
                return generateColorObject(value, `${prefix}-${key}`);
            }
            return { [`--ffe${prefix}-${key.toLowerCase()}`]: value.value };
        })
        .reduce((acc, current) => ({ ...acc, ...current }), {});
}

function getCamelCase(str) {
    return str
        .replace(/^--ffe-/, '')
        .replace(/-([a-z])/g, (match, p1) => p1.toUpperCase())
        .replace(/-([A-Z])/g, (match, p1) => p1)
        .replace(/^([A-Z])/, (match, p1) => p1.toLowerCase());
}

function generateTSSemantic(semanticColors) {
    let newString = 'export const semanticColors = {\n';
    newString += Object.entries(generateColorObject(semanticColors))
        .map(([key, value]) => `${getCamelCase(key)}: '${key}'`)
        .join(',\n');
    newString += '\n};';
    return newString;
}

function generateTSRecursive(semanticColors, prefix = '') {
    return Object.entries(semanticColors)
        .map(([key, value], index) => {
            const camelCaseKey = index === 0 ? key : toCamelCase(key);
            if (
                typeof value === 'object' &&
                value !== null &&
                value.value === undefined
            ) {
                return generateTSRecursive(
                    value,
                    `${prefix}${camelCaseKey.charAt(0) + camelCaseKey.slice(1)}`,
                );
            }
            return `${prefix}${camelCaseKey.charAt(0) + camelCaseKey.slice(1)}: '${value.value}',`
                .replace(/æ/g, 'ae')
                .replace(/ø/g, 'o')
                .replace(/å/g, 'aa');
        })
        .join('\n');
}

function generateTS(semanticColors) {
    let newString = 'export const primitiveColors = {\n';
    newString += generateTSRecursive(semanticColors);
    newString += '};';
    return newString;
}

function getSemanticColors(semanticColors, fileType, darkMode, prefix, type) {
    let newList = ':root, :host {\n';
    newList += darkMode
        ? `@media (prefers-color-scheme: dark) {\n.regard-color-scheme-preference {\n`
        : '';
    newList += prefix ? `${prefix}\n` : '';
    newList += generateColorVariables(semanticColors, fileType);
    newList += prefix ? '}\n' : '';
    newList += darkMode ? '}\n}' : '';
    newList += '\n}';
    return newList
        .replace(/æ/g, 'ae')
        .replace(/ø/g, 'o')
        .replace(/å/g, 'aa')
        .toLowerCase();
}

function processFiles() {
    Object.entries(fileNames).forEach(
        ([key, { fileName, type, dataPath, darkMode, prefix }]) => {
            const data = JSON.parse(readFileSync(dataPath));
            ['css', 'less'].forEach(fileType => {
                writeFileSync(
                    `../${fileType}/colors/${fileName}.${fileType}`,
                    getSemanticColors(data, fileType, darkMode, prefix, type),
                );
            });
        },
        //ny fil
    );

    writeFileSync(
        '../ts/colors/primitives.ts',
        generateTS(JSON.parse(readFileSync(fileNames.primitives.dataPath))),
    );
    writeFileSync(
        '../ts/colors/semantic.ts',
        generateTSSemantic(JSON.parse(readFileSync(fileNames.light.dataPath))),
    );

    writeFileSync(
        '../less/colors/ffe-colors.less',
        Object.entries(fileNames)
            .map(([key, value]) => {
                console.log(value.fileName);
                return `@import '${value.fileName}.less';`;
            })
            .join('\n'),
    );
    writeFileSync(
        '../css/colors/ffe-colors.css',
        Object.entries(fileNames)
            .map(([key, value]) => {
                return `@import url('${value.fileName}.css');`;
            })
            .join('\n'),
    );
}

createFolders();
processFiles();
