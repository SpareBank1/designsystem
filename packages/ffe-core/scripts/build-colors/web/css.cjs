#!/usr/bin/env node
const { writeToFile } = require('../../utils.cjs');

function transformToCssProperty(name, value) {
    return `--ffe-${name.replaceAll('.', '-')}: ${value};`;
}

function generateCssColorFileContent(colors) {
    return `
/* Generated from Figma tokens */



/* dark mode default context */
@media (prefers-color-scheme: dark) {
    .regard-color-scheme-preference,
    .regard-color-scheme-preference .ffe-default-mode {
    ${Object.entries(colors.dark)
        .map(([name, value]) => transformToCssProperty(name, value))
        .join('\n')}
    }
}


/* dark mode accent når en overstyrer os/nettleser light/dark preferanse*/
.ffe-dark,
.ffe-dark .ffe-default-mode {
${Object.entries(colors.dark)
    .map(([name, value]) => transformToCssProperty(name, value))
    .join('\n')}
}

/* dark mode accent context */
@media (prefers-color-scheme: dark) {
    .regard-color-scheme-preference .ffe-accent-mode {
    ${Object.entries(colors.darkAccent)
        .map(([name, value]) => transformToCssProperty(name, value))
        .join('\n')}
    }
}

/* dark mode accent når en overstyrer os/nettleser light/dark preferanser*/
.ffe-dark .ffe-accent-mode {
${Object.entries(colors.darkAccent)
    .map(([name, value]) => transformToCssProperty(name, value))
    .join('\n')}
} 

/* Default context */
:root,
:host,
.ffe-default-mode,
.ffe-light,
.ffe-light .ffe-default-mode {
  ${Object.entries(colors.light)
      .map(([name, value]) => transformToCssProperty(name, value))
      .join('\n')}
}

/* Accent context */
.ffe-light .ffe-accent-mode,
.ffe-accent-mode {
  ${Object.entries(colors.lightAccent)
      .map(([name, value]) => transformToCssProperty(name, value))
      .join('\n')}
}
`;
}

function buildCssColors(paths, colors) {
    paths.forEach(path => {
        const content = generateCssColorFileContent(colors);
        writeToFile(path + 'less/colors-semantic.less')(content);
        writeToFile(path + 'css/colors-semantic.css')(content);
    });
}

module.exports = { buildCssColors };
