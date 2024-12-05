#!/usr/bin/env node
const { readFileSync } = require('../io');

const fileNames = {
    primitives: {
        fileName: 'primitives',
        dataPath: '../data/primitives.json',
    },
    light: {
        fileName: 'semantic-light',
        dataPath: '../data/light-mode.json',
    },
    dark: {
        fileName: 'semantic-dark',
        dataPath: '../data/dark-mode.json',
    },
    accent: {
        fileName: 'semantic-accent',
        dataPath: '../data/accent-mode.json',
    },
    accentDark: {
        fileName: 'semantic-accent-dark',
        type: 'semantic',
        dataPath: '../data/accent-dark-mode.json',
    },
};

const flattenObject = (input, prefix = '') => {
    return Object.entries(input)
        .flatMap(([key, data]) => {
            if (
                typeof data === 'object' &&
                data !== null &&
                data.value === undefined
            ) {
                return flattenObject(data, prefix ? `${prefix}-${key}` : key);
            }
            return { [`${prefix}-${key.toLowerCase()}`]: data.value };
        })
        .reduce((acc, current) => ({ ...acc, ...current }), {});
};

const getObjectByPath = (obj, objPath) => {
    if (!obj || typeof objPath !== 'string') {
        return undefined;
    }
    return objPath.split('.').reduce((acc, key) => acc && acc[key], obj);
};

const extractColors = (themeObj, primitivesObj) => {
    return Object.entries(flattenObject(themeObj)).map(([key, data]) => {
        return [
            key.toLowerCase(),
            getObjectByPath(
                primitivesObj,
                `${data.replace(/[^a-zA-Z0-9æøå.]/g, '')}.value`,
            ),
        ];
    });
};

const primitivesObj = JSON.parse(readFileSync(fileNames.primitives.dataPath));
const accentObj = JSON.parse(readFileSync(fileNames.accent.dataPath));
const accentDarkObj = JSON.parse(readFileSync(fileNames.accentDark.dataPath));
const lightObj = JSON.parse(readFileSync(fileNames.light.dataPath));
const darkObj = JSON.parse(readFileSync(fileNames.dark.dataPath));

module.exports = {
    getPrimitives: () => Object.entries(flattenObject(primitivesObj)),
    getLightMode: () => extractColors(lightObj, primitivesObj),
    getDarkMode: () => extractColors(darkObj, primitivesObj),
    getAccent: () => extractColors(accentObj, primitivesObj),
    getAccentDark: () => extractColors(accentDarkObj, primitivesObj),
};
