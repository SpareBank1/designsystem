#!/usr/bin/env node
const { writeToFile } = require('../../utils.cjs');

function transformToCssProperty(name, value) {
    return `--ffe-${name.replaceAll('.', '-')}: ${value};`;
}

function generateCssColorFileContent(colors) {
    return `
/* Generated from Figma tokens */

/* Default context */
:root,
:host,
.ffe-default-mode {
  ${Object.entries(colors.light)
      .map(([name, value]) => transformToCssProperty(name, value))
      .join('\n')}
}

/* Accent context */
.ffe-accent-mode {
  ${Object.entries(colors.lightAccent)
      .map(([name, value]) => transformToCssProperty(name, value))
      .join('\n')}
}

/* dark mode default context */
@media (prefers-color-scheme: dark) {
    .regard-color-scheme-preference,
    .regard-color-scheme-preference .ffe-default-mode {
    ${Object.entries(colors.dark)
        .map(([name, value]) => transformToCssProperty(name, value))
        .join('\n')}
    }
}

/* dark mode accent context */
@media (prefers-color-scheme: dark) {
    .regard-color-scheme-preference .ffe-accent-mode {
    ${Object.entries(colors.darkAccent)
        .map(([name, value]) => transformToCssProperty(name, value))
        .join('\n')}
    }
}
`;
}

function generateStorybookCssColorFileContent(colors) {
    return `
/* Generated from Figma tokens */

.dark-mode, .dark-mode .ffe-default-mode {
  ${Object.entries(colors.dark)
      .map(([name, value]) => transformToCssProperty(name, value))
      .join('\n')}
}

.dark-mode .ffe-accent-mode, .dark-mode.ffe-accent-mode {
  ${Object.entries(colors.darkAccent)
      .map(([name, value]) => transformToCssProperty(name, value))
      .join('\n')}
}
`;
}

function buildCssColors(paths, colors) {
    paths.forEach(path => {
        const content = generateCssColorFileContent(colors);
        writeToFile(path + 'less/colors-semantic.less')(content);
        writeToFile(path + 'less/colors-semantic-storybook.less')(
            generateStorybookCssColorFileContent(colors),
        );
        writeToFile(path + 'css/colors-semantic.css')(content);
    });
}

module.exports = { buildCssColors };
