module.exports = {
    "extends": "stylelint-config-standard",
    "rules": {
        "at-rule-empty-line-before": [
            "always", { "except": [ "blockless-after-same-name-blockless" ] }
        ],
        "at-rule-no-vendor-prefix": true,
        "color-hex-case": "upper",
        "indentation": [4, { "ignore": ["inside-parens"] }],
        "max-nesting-depth": 3,
        "media-feature-name-no-vendor-prefix": true,
        "property-no-vendor-prefix": true,
        "selector-max-specificity": "0,3,0",
        "selector-no-vendor-prefix": true,
        "value-no-vendor-prefix": true,
    }
}
