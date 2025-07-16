#!/usr/bin/env node
const { buildChevronCssColors } = require('./chevron.cjs');
const { buildCssColors } = require('./css.cjs');
const { buildJsColors } = require('./js.cjs');
const { buildColorsNames } = require('./color-names.cjs');
const { buildTailwindJsColors } = require('./tailwind.cjs');

function buildWebColors(paths, colors) {
    buildCssColors(paths, colors);
    buildJsColors(paths, colors);
    buildChevronCssColors(paths, colors);
    buildColorsNames(paths, colors);
    buildTailwindJsColors(paths, colors);
}

module.exports = { buildWebColors };
