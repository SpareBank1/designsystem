#!/usr/bin/env node
const { writeToFile } = require('../../utils.cjs');

function transformToCssProperty(name, value) {
    return `--ffe-${name.replaceAll('.', '-')}: ${value};`;
}

function generateChevronCssColorFileContent(colors) {
    return `
/* Generated from Figma tokens */



// Chevron colors to make it work with semantic colors
@ffe-color-chevron-light-default: ${Object.entries(colors.light)
        .filter(([name]) => name === 'color.foreground.default')
        .map(([_, value]) => value)[0]
        .substring(1)};
@ffe-color-chevron-dark-default: ${Object.entries(colors.lightAccent)
        .filter(([name]) => name === 'color.foreground.default')
        .map(([_, value]) => value)[0]
        .substring(1)};
@ffe-color-chevron-light-accent: ${Object.entries(colors.dark)
        .filter(([name]) => name === 'color.foreground.default')
        .map(([_, value]) => value)[0]
        .substring(1)};
@ffe-color-chevron-dark-accent: ${Object.entries(colors.darkAccent)
        .filter(([name]) => name === 'color.foreground.default')
        .map(([_, value]) => value)[0]
        .substring(1)};



`;
}

function buildChevronCssColors(paths, colors) {
    paths.forEach(path => {
        const content = generateChevronCssColorFileContent(colors);
        writeToFile(path + 'less/colors-semantic-chevron.less')(content);
    });
}

module.exports = { buildChevronCssColors };
