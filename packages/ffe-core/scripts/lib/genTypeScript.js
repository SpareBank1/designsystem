module.exports.genTSSource = obj =>
    Object.keys(obj)
        .map(k => `export const ${k} = '${obj[k]}';`)
        .join('\n');

module.exports.genTSModIndex = sources =>
    sources.map(s => `export * from './${s}';`).join('\n');
