#!/usr/bin/env node
const { writeToFile } = require('../../utils.cjs');

function transformToCssPropertyName(name) {
    return `--ffe-${name.replaceAll('.', '-')}`;
}

function transformToTailwindJsVariableName(name) {
    return `['${name.slice(6).replaceAll('.', '-')}']`;
}

function generateJsTailwindColorFileContent(colors) {
    return `"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

${Object.entries(colors.light)
    .map(([name]) => `exports${transformToTailwindJsVariableName(name)} = `)
    .join('')}  void 0

${Object.entries(colors.light)
    .map(
        ([name]) =>
            `exports${transformToTailwindJsVariableName(name)} = 'var(${transformToCssPropertyName(name)})';`,
    )
    .join('\n')}
`;
}

function buildTailwindJsColors(paths, colors) {
    paths.forEach(path => {
        const content = generateJsTailwindColorFileContent(colors);
        writeToFile(path + 'lib/semanticColorsTailwind.js')(content);
    });
}

module.exports = { buildTailwindJsColors };
