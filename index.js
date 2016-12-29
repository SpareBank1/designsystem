module.exports = {
    'extends': [
        'eslint-config-ffe-base',
        './rules/jsx',
        './rules/jsx-a11y'
    ].map(require.resolve),
    'plugins': [
        'react',
        'jsx-a11y'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
    },
    'ecmaFeatures': {
        'jsx': true
    },
    'rules': {}
};
