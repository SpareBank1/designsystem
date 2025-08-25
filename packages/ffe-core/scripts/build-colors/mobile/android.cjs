#!/usr/bin/env node
const { writeToFile } = require('../../utils.cjs');

const removeHash = value => (value.startsWith('#') ? value.slice(1) : value);
const cssHexToAndroidHex = str => str.slice(-2) + str.slice(0, -2);

function transformToAndroidHex(value) {
    value = removeHash(value).toUpperCase();
    if (value.length === 6) {
        return `0xFF${value}`;
    } else if (value.length === 8) {
        return `0x${cssHexToAndroidHex(value)}`;
    } else {
        throw new Error(
            `Invalid color value: ${value}. Expected 6 or 8 characters (with or without #).`,
        );
    }
}

function transformToAndroidColorName(name) {
    return name
        .split('.')
        .map((part, idx) =>
            idx === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1),
        )
        .join('');
}

function generateAndroidColorFileContent(colors) {
    return `
/* Generated from Figma tokens */
/* Dokumentasjon på: https://sparebank1.github.io/designsystem/?path=/docs/design-farger-native--docs */
/* Fargene er bygget fra FFE Core versjon: ${require('../../../package.json').version} */

object Colors {

    object LightDefault {
        ${Object.entries(colors.light)
            .map(
                ([name, value]) =>
                    `val ${transformToAndroidColorName(
                        name,
                    )} = Color(${transformToAndroidHex(value)})`,
            )
            .join('\n')}
    }

    object DarkDefault {
        ${Object.entries(colors.dark)
            .map(
                ([name, value]) =>
                    `val ${transformToAndroidColorName(
                        name,
                    )} = Color(${transformToAndroidHex(value)})`,
            )
            .join('\n')}
    }

    object LightAccent {
        ${Object.entries(colors.lightAccent)
            .map(
                ([name, value]) =>
                    `val ${transformToAndroidColorName(
                        name,
                    )} = Color(${transformToAndroidHex(value)})`,
            )
            .join('\n')}
    }

    object DarkAccent {
        ${Object.entries(colors.darkAccent)
            .map(
                ([name, value]) =>
                    `\t\tval ${transformToAndroidColorName(
                        name,
                    )} = Color(${transformToAndroidHex(value)})`,
            )
            .join('\n')}
    }
}


`;
}

function buildAndroidColors(paths, colors) {
    paths.forEach(path => {
        writeToFile(path + '/Colors.kt')(
            generateAndroidColorFileContent(colors),
        );
    });
}

module.exports = {
    buildAndroidColors,
    generateAndroidColorFileContent,
    transformToAndroidHex,
    transformToAndroidColorName,
};
