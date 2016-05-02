module.exports = {
    'extends': [
        './errors',
        './regex',
        './bestPractices',
        './es6.js'
    ].map(require.resolve),
    'env': {
        'es6': true,
        'browser': true,
        'node': true
    },
    'parserOptions': {
        'ecmaVersion': 6,
        'ecmaFeatures': {
            'arrowFunctions': true,
            'experimentalObjectRestSpread': true
        },
        'sourceType': 'module'
    },
    'plugins': [
        'import'
    ]
};

