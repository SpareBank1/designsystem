module.exports = {
    extends: ['stylelint-config-standard', '@sb1/stylelint-config-ffe'],
    rules: {
        'at-rule-no-vendor-prefix': true,
        'max-nesting-depth': [
            4,
            {
                ignoreAtRules: ['media'],
            },
        ],
        'media-feature-name-no-vendor-prefix': true,
        'property-no-vendor-prefix': true,
        'selector-max-specificity': [
            '0,3,0',
            {
                severity: 'warning',
            },
        ],
        'selector-no-vendor-prefix': true,
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['extend'],
            },
        ],
        'selector-pseudo-element-colon-notation': [
            'double',
            {
                severity: 'warning',
            },
        ],
        'value-no-vendor-prefix': true,
        'declaration-block-no-redundant-longhand-properties': [
            true,
            { ignoreShorthands: ['flex-flow'] },
        ],
        'no-descending-specificity': null,
        'selector-class-pattern': [
            '^(regard-color-scheme-preference|ffe-([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2})$',
            {
                message: 'Expected class selector to be ffe-bem',
            },
        ],
        'rule-empty-line-before': null,
        'alpha-value-notation': null,
        'value-keyword-case': [
            'lower',
            {
                severity: 'warning',
            },
        ],
        'selector-not-notation': [
            'complex',
            {
                severity: 'warning',
            },
        ],
    },
    overrides: [
        {
            files: ['**/*.less'],
            customSyntax: 'postcss-less',
            rules: {
                'color-function-notation': null,
                'import-notation': 'string',
                '@sb1/ffe-no-deprecated-color-vars': [
                    true,
                    {
                        severity: 'warning',
                    },
                ],
                'function-no-unknown': [
                    true,
                    {
                        ignoreFunctions: ['extend', 'fade', 'data-uri', 'e'],
                    },
                ],
            },
        },
    ],
};
