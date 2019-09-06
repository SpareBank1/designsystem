module.exports = {
    extends: [
        '@sb1/eslint-config-ffe-base',
        './rules/jsx',
        './rules/jsx-a11y',
    ].map(require.resolve),
    plugins: ['react', 'jsx-a11y', 'react-hooks'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {},
};
