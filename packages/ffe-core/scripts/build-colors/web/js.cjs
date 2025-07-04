#!/usr/bin/env node
const { writeToFile } = require('../../utils.cjs');

function transformToCssPropertyName(name) {
    return `--ffe-${name.replaceAll('.', '-')}`;
}

function transformToJsVariableName(name) {
    return name
        .slice(6)
        .replaceAll('-', '.')
        .split('.')
        .map((part, idx) =>
            idx === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1),
        )
        .join('');
}

function generateJsColorFileContent(colors) {
    return `
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

${Object.entries(colors.light)
    .map(([name]) => `exports.${transformToJsVariableName(name)} = `)
    .join('')}  void 0

${Object.entries(colors.light)
    .map(
        ([name]) =>
            `exports.${transformToJsVariableName(name)} = 'var(${transformToCssPropertyName(name)})';`,
    )
    .join('\n')}
`;
}

function buildJsColors(paths, colors) {
    paths.forEach(path => {
        const content = generateJsColorFileContent(colors);
        writeToFile(path + 'lib/semanticColors.js')(content);
    });
}

module.exports = { buildJsColors };
