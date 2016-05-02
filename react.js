module.exports = {
    'extends': [
        './index',
        './jsx'
    ],
    'plugins': [
        'react'
    ],
    'parserOptions': {
        'ecmaVersion': 6,
        'ecmaFeatures': {
            'arrowFunctions': true,
            'experimentalObjectRestSpread': true,
            'jsx': true
        },
        'sourceType': 'module'
    },
    'ecmaFeatures': {
        'jsx': true
    }
};