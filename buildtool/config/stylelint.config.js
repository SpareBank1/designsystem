module.exports = {
    plugins: ['stylelint-no-unsupported-browser-features'],
    extends: ['stylelint-config-standard', '@sb1/stylelint-config-ffe'],
    ignoreFiles: ['**/colors-semantic.less'],
    overrides: [
        {
            files: ['**/colors-semantic.less'],
            rules: {
                'selector-class-pattern': null,
                'no-duplicate-selectors': null,
                'color-hex-length': null,
            },
        },
        {
            files: ['**/*.less'],
            customSyntax: 'postcss-less',
            rules: {
                'color-function-notation': null,
                'color-function-alias-notation': null,
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
                'at-rule-prelude-no-invalid': null,
                'declaration-property-value-no-unknown': null,
                'property-no-deprecated': null,
            },
        },
    ],
    rules: {
        'at-rule-no-vendor-prefix': true,
        'max-nesting-depth': [
            4,
            {
                ignoreAtRules: ['media'],
            },
        ],
        'declaration-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
                ignore: ['after-comment', 'after-declaration'],
                severity: 'warning',
            },
        ],
        'media-feature-name-no-vendor-prefix': true,
        'property-no-vendor-prefix': null,
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
        'plugin/no-unsupported-browser-features': [
            true,
            {
                severity: 'warning',
                ignore: [
                    'css-sel3',
                    'css-nesting',
                    'css-overflow',
                    'css-hyphens',
                    'css-matches-pseudo',
                    'css-not-sel-list',
                    'css-masks',
                    'intrinsic-width',
                    'multicolumn',
                    'css3-cursors',
                    'css-grid-animation',
                ],
            },
        ],
    },
};
