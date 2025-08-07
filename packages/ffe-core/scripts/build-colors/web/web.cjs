#!/usr/bin/env node
const { buildChevronCssColors } = require('./chevron.cjs');
const { buildCssColors } = require('./css.cjs');
const { buildJsColors } = require('./js.cjs');
const { buildColorsNames } = require('./color-names.cjs');
const { buildTailwindJsColors } = require('./tailwind.cjs');
const { buildTailwind4CssColors } = require('./tailwind4.cjs');

function buildWebColors(paths, colors) {
    buildCssColors(paths, colors);
    buildJsColors(paths, colors);
    buildChevronCssColors(paths, colors);
    buildColorsNames(paths, colors);
    buildTailwindJsColors(paths, colors);
    buildTailwind4CssColors(paths, colors);
}

module.exports = { buildWebColors };
