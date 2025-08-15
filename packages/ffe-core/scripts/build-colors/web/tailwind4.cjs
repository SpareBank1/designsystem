#!/usr/bin/env node
const { writeToFile } = require('../../utils.cjs');

function transformToTW4CssProperty(name, value) {
    return `--${name.replaceAll('.', '-')}: var(--ffe-${name.replaceAll('.', '-')});`;
}

function generateTailwind4CssColorFileContent(colors) {
    return `@theme inline {
\t${Object.entries(colors.light)
        .map(([name]) => transformToTW4CssProperty(name))
        .join('\n\t')}
}
`;
}

function buildTailwind4CssColors(paths, colors) {
    paths.forEach(path => {
        const content = generateTailwind4CssColorFileContent(colors);
        writeToFile(path + 'css/colors-semantic-tailwind-4.css')(content);
    });
}

module.exports = { buildTailwind4CssColors };
