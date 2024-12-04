const fs = require('fs').promises;
const less = require('less');

const readLessRulesFromFile = async inputFile => {
    const data = await fs.readFile(inputFile, 'utf8');
    const { rules } = await less.parse(data, { filename: inputFile });

    return rules;
};

const getVariableNames = rules =>
    rules.filter(r => r.variable === true).map(r => r.name.slice(1));

const applyCallbackOnImports = (rules, cb) =>
    rules.filter(r => r.importedFilename).map(r => cb(r.importedFilename));

/**
 * Read less variables recursively from a given file. This function follows import-statements.
 */
const readPropertyNames = async inputFile => {
    const rules = await readLessRulesFromFile(inputFile);

    return getVariableNames(rules).concat(
        (
            await Promise.all(applyCallbackOnImports(rules, readPropertyNames))
        ).flat(),
    );
};

/**
 * Takes less variables from a given file and generates a css stylesheet with
 * these variables as custom properties on the :root pseudo-class.
 */
module.exports = async inputFile => {
    const propertyNames = await readPropertyNames(inputFile);

    const { css } = await less.render(
        `@import '${inputFile}';` +
            `@props: ${propertyNames.join(', ')};` +
            `:root, :host { each(@props, { --@{value}: @@value; }); }`,
    );

    return css;
};
