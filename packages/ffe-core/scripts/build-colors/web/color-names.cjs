#!/usr/bin/env node
const { writeToFile } = require('../../utils.cjs');

function transformToCssProperty(name) {
    return `--ffe-${name.replaceAll('.', '-')}`;
}

function generateColorNamesFileContent(colors) {
    const colorNames = {
        colors: Object.entries(colors.light).map(([name]) =>
            transformToCssProperty(name),
        ),
    };
    return JSON.stringify(colorNames, null, 2);
}

function buildColorsNames(paths, colors) {
    paths.forEach(path => {
        const content = generateColorNamesFileContent(colors);
        writeToFile(path + 'gen-src/semantic-color-names.json')(content);
    });
}

module.exports = { buildColorsNames };
