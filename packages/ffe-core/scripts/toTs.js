const capitalized = string => string.charAt(0).toUpperCase() + string.slice(1);

const camelCase = it =>
    it
        .split('-')
        .reduce(
            (result, curr, index) =>
                index === 0 ? curr : `${result}${capitalized(curr)}`,
            '',
        );

module.exports = data => {
    const variables = data.map(
        ([key, value]) => `export const ${camelCase(key)}: ${value};`,
    );
    return variables.join('\n');
};
