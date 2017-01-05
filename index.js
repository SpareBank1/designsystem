module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'at-rule-empty-line-before': ['always', {
      except: [
        'first-nested',
        'blockless-after-same-name-blockless'
      ],
      ignore: ['after-comment']
    }],
    'at-rule-no-vendor-prefix': true,
    'color-hex-case': 'upper',
    'indentation': [ 4, {
      ignore: ['inside-parens'],
      severity: 'warn'
    }],
    'no-missing-end-of-source-newline': null,
    'number-leading-zero': null,
    'max-nesting-depth': 3,
    'media-feature-name-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'selector-list-comma-newline-after': ['always', {
      severity: 'warn'
    }],
    'selector-max-specificity': ['0,3,0', {
      severity: 'warn'
    }],
    'selector-no-vendor-prefix': true,
    'selector-pseudo-class-no-unknown': [true, {
      ignorePseudoClasses: ['extend']
    }],
    'selector-pseudo-element-colon-notation': ['double', {
      severity: 'warn'
    }],
    'value-no-vendor-prefix': true
  }
}
