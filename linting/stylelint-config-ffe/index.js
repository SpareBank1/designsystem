module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
    rules: {
        'at-rule-empty-line-before': [
            'always',
            {
                except: ['first-nested', 'blockless-after-same-name-blockless'],
                ignore: ['after-comment'],
            },
        ],
        'at-rule-no-vendor-prefix': true,
        indentation: [
            4,
            {
                ignore: ['inside-parens'],
                severity: 'warn',
            },
        ],
        'no-missing-end-of-source-newline': null,
        'number-leading-zero': null,
        'max-nesting-depth': 3,
        'media-feature-name-no-vendor-prefix': true,
        'property-no-vendor-prefix': true,
        'selector-list-comma-newline-after': [
            'always',
            {
                severity: 'warn',
            },
        ],
        'selector-max-specificity': [
            '0,3,0',
            {
                severity: 'warn',
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
                severity: 'warn',
            },
        ],
        'value-no-vendor-prefix': true,
        'declaration-block-no-redundant-longhand-properties': [
            true,
            { ignoreShorthands: ['flex-flow'] },
        ],
        'selector-combinator-space-before': null,
        'no-descending-specificity': null,
    },
};
