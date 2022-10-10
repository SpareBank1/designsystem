# @sb1/stylelint-config-ffe

A (stylelint)[https://stylelint.io/] extension with rules for working with FFE components.

## Usage

Add stylelint and this package to your project:

```bash
npm install --save-dev stylelint @sb1/stylelint-config-ffe
```

Configure your stylelint configuration file to extend this package:

```javascript
module.export = {
    extends: ['@sb1/stylelint-config-ffe'],
};
```

## References

### @sb1/ffe-no-deprecated-color-vars

Disallow deprecated less color variables.

```javascript
module.export = {
    extends: ['@sb1/stylelint-config-ffe']
    overrides: [
        {
            files: ['**/*.less'],
            customSyntax: 'postcss-less',
            rules: {
                '@sb1/ffe-no-deprecated-color-vars': true
            }
        }
    ]
}
```

#### Options

#### `true`

The following code is considered a problem:

```less
a {
    color: @ffe-blue-deep-sky;
    /** ffe-blue-deep-sky is deprecated */
}
```
