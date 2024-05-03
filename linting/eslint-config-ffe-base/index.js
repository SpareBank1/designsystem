module.exports = {
    extends: [
        './rules/errors',
        './rules/regex',
        './rules/bestPractices',
        './rules/es6.js',
    ].map(require.resolve),
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: {
            arrowFunctions: true,
            experimentalObjectRestSpread: true,
        },
        sourceType: 'module',
    },
    plugins: ['import'],
};
