const fs = require('fs');
const path = require('path');
const { buildAndroidColors } = require('./mobile/android.cjs');
const { buildIosColors } = require('./mobile/ios.cjs');
const { buildWebColors } = require('./web/web.cjs');
const { buildJSONColors } = require('./json/json.cjs');

const tokensPath = '../../tokens';
const files = {
    primitive: '01 Primitive.value.json',
    semanticLight: '02 Semantic.Light.json',
    semanticDark: '02 Semantic.Dark.json',
    context: '03 Context.Default.json',
    contextAccent: '03 Context.Accent.json',
};

function filePath(filename) {
    return path.resolve(__dirname, tokensPath, filename);
}

function loadColorsFromTokens(fileName, referenceDict) {
    const colorDict = {};
    const jsonContent = JSON.parse(
        fs
            .readFileSync(filePath(fileName), 'utf8')
            .replaceAll('-', '.')
            .toLowerCase(),
    );
    const processColorTokens = (obj, prefix = '') => {
        for (const [key, value] of Object.entries(obj)) {
            if (value.$type === 'color') {
                const cssVarName = `${prefix}${key}`;
                if (!referenceDict) {
                    colorDict[cssVarName] = value.$value;
                } else {
                    const colorValue = referenceDict[value.$value.slice(1, -1)];
                    if (!colorValue) {
                        throw new Error(
                            `In file ${fileName} .Color value (${colorValue}) for ${cssVarName} is missing in the reference dictionary.`,
                        );
                    }
                    colorDict[cssVarName] = colorValue;
                }
            } else if (typeof value === 'object') {
                processColorTokens(value, `${prefix}${key}.`);
            }
        }
    };
    processColorTokens(jsonContent);
    return colorDict;
}

function buildColorDict() {
    const primitiveColors = loadColorsFromTokens(files.primitive);
    const semanticLightColors = loadColorsFromTokens(
        files.semanticLight,
        primitiveColors,
    );
    const semanticDarkColors = loadColorsFromTokens(
        files.semanticDark,
        primitiveColors,
    );

    return {
        light: loadColorsFromTokens(files.context, semanticLightColors),
        dark: loadColorsFromTokens(files.context, semanticDarkColors),
        lightAccent: loadColorsFromTokens(
            files.contextAccent,
            semanticLightColors,
        ),
        darkAccent: loadColorsFromTokens(
            files.contextAccent,
            semanticDarkColors,
        ),
    };
}

function buildColors(platforms, iosPaths, androidPaths, jsonPaths, webPaths) {
    console.log(platforms, iosPaths, androidPaths);
    if (!platforms || (!androidPaths && !iosPaths && !jsonPaths && !webPaths)) {
        console.error('Platform and path arguments are required.');
        return;
    }
    if (
        !platforms.includes('android') &&
        !platforms.includes('ios') &&
        !platforms.includes('json') &&
        !platforms.includes('web')
    ) {
        console.error(
            "Platform must include 'android', 'ios', 'json, or 'web'.",
        );
        return;
    }

    const colorDict = buildColorDict();
    if (platforms.includes('android')) {
        buildAndroidColors(androidPaths, colorDict);
    }
    if (platforms.includes('ios')) {
        buildIosColors(iosPaths, colorDict);
    }
    if (platforms.includes('web')) {
        buildWebColors(webPaths, colorDict);
    }
    if (platforms.includes('json')) {
        buildJSONColors(jsonPaths, colorDict);
    }
}

module.exports = {
    loadColorsFromTokens,
    buildColorDict,
    buildColors,
};
