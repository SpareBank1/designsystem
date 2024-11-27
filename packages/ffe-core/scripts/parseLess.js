const fs = require('fs').promises;
const less = require('less');

module.exports = async inputFile => {
    const data = await fs.readFile(inputFile, 'utf8');
    const root = await less.parse(data, { filename: inputFile });

    const propertyNames = root.rules
        .filter(r => r.variable)
        .map(n => n.name.slice(1));

    const { css } = await less.render(
        `@import '${inputFile}';` +
            `@props: ${propertyNames.join(', ')};` +
            `:root, :host { each(@props, { --@{value}: @@value; }); }`,
    );

    return css
        .split('\n')
        .filter(it => it.includes('--'))
        .map(it =>
            it.replace('--', '').replace(/\s/g, '').replace(';', '').split(':'),
        );
};
