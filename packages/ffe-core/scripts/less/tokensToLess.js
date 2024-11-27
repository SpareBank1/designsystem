#!/usr/bin/env node
const getTokens = require('./getTokens');
const fs = require('node:fs');
const path = require('path');
const toLess = require('./toLess');
const { readFileSync, writeFileSync } = require('../io');

const { getLightMode, getAccent, getAccentDark, getDarkMode, getPrimitives } =
    getTokens;

const primitives = getPrimitives();
const lightMode = getLightMode();
const darkMode = getDarkMode();
const accent = getAccent();
const accentDark = getAccentDark();

const accentClass = 'accent';

writeFileSync('../less/colors/primitives.less', toLess(primitives).join('\n'));
writeFileSync(
    '../less/colors/light.less',
    `:root, :host {\n${toLess(lightMode).join('\n')}\n}`,
);

writeFileSync(
    '../less/colors/dark.less',
    `@media (prefers-color-scheme: dark) {\n:root .regard-color-scheme-preference, :host .regard-color-scheme-preference {\n${toLess(darkMode).join('\n')}\n}\n}`,
);

writeFileSync(
    '../less/colors/accent.less',
    `:root .${accentClass}, :host .${accentClass} {\n${toLess(accent).join('\n')}\n}`,
);

writeFileSync(
    '../less/colors/accent-dark.less',
    `@media (prefers-color-scheme: dark) {\n:root .regard-color-scheme-preference .${accentClass}, :host .regard-color-scheme-preference .${accentClass} {\n${toLess(accentDark).join('\n')}\n}\n}`,
);
