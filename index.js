module.exports = {
    'extends': [
        'eslint-config-ffe-base',
        './rules/jsx'
    ].map(require.resolve),
    'plugins': [
        'react'
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
