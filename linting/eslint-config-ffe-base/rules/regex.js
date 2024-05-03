module.exports = {
    rules: {
        // disallow control characters in regular expressions
        // http://eslint.org/docs/rules/no-control-regex
        'no-control-regex': 2,

        // disallow the use of empty character classes in regular expressions
        // http://eslint.org/docs/rules/no-empty-character-class
        'no-empty-character-class': 2,

        // disallow invalid regular expression strings in the RegExp constructor
        // http://eslint.org/docs/rules/no-invalid-regexp
        'no-invalid-regexp': 2,

        // disallow multiple spaces in a regular expression literal
        // http://eslint.org/docs/rules/no-regex-spaces
        'no-regex-spaces': 2,
    },
};
