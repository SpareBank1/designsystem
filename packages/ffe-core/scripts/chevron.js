#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const writeToFile = require('./lib/writeToFile');

const chevron = {
    default: {
        variable: '',
        light: {
            variable: '',
            value: '',
        },
        dark: {
            variable: '',
            value: '',
        },
    },
    accent: {
        variable: '',
        light: {
            variable: '',
            value: '',
        },
        dark: {
            variable: '',
            value: '',
        },
    },
};
function filePath(filename) {
    return path.resolve('tokens', filename);
}

const loadFile = file => {
    return JSON.parse(fs.readFileSync(filePath(file), 'utf8'));
};

const files = {
    primitive: loadFile('01 Primitive.value.json'),
    semanticLight: loadFile('02 Semantic.Light.json'),
    semanticDark: loadFile('02 Semantic.Dark.json'),
    context: loadFile('03 Context.Default.json'),
    contextAccent: loadFile('03 Context.Accent.json'),
};

function getValueRecursive(obj, p, addColor) {
    const keys = p.slice(1, -1).split('.');
    return keys.reduce((acc, key) => acc[key], obj).$value;
}

module.exports = () => {
    // The variables to change
    chevron.default.variable = files.context.color.foreground.default.$value;
    chevron.accent.variable =
        files.contextAccent.color.foreground.default.$value;

    // default

    chevron.default.light.variable = getValueRecursive(
        files.semanticLight,
        chevron.default.variable,
    );

    chevron.default.light.value = getValueRecursive(
        files.primitive,
        chevron.default.light.variable,
        true,
    );

    chevron.default.dark.variable = getValueRecursive(
        files.semanticDark,
        chevron.default.variable,
    );
    chevron.default.dark.value = getValueRecursive(
        files.primitive,
        chevron.default.dark.variable,
        true,
    );
    // accent

    chevron.accent.light.variable = getValueRecursive(
        files.semanticLight,
        chevron.accent.variable,
    );

    chevron.accent.light.value = getValueRecursive(
        files.primitive,
        chevron.accent.light.variable,
        true,
    );

    chevron.accent.dark.variable = getValueRecursive(
        files.semanticDark,
        chevron.accent.variable,
    );
    chevron.accent.dark.value = getValueRecursive(
        files.primitive,
        chevron.accent.dark.variable,
        true,
    );

    const semanticChevron = {
        lightDefault: chevron.default.light.value,
        darkDefault: chevron.default.dark.value,
        lightAccent: chevron.accent.light.value,
        darkAccent: chevron.accent.dark.value,
    };

    const chevronLess = `
// Chevron colors to make it work with semantic colors
@ffe-color-chevron-light-default: ${semanticChevron.lightDefault};
@ffe-color-chevron-dark-default: ${semanticChevron.darkDefault};
@ffe-color-chevron-light-accent: ${semanticChevron.lightAccent};
@ffe-color-chevron-dark-accent: ${semanticChevron.darkAccent};
`;

    writeToFile('less/colors-semantic-chevron.less')(chevronLess);
};
