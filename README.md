# ffe-eslint-config

Recommended eslint-config used for ffe-components. Based on eslint-config-airbnb, but without any styling rules.

## Usage

Install npm module

```bash
npm i -D eslint eslint-config-ffe eslint-plugin-import eslint-plugin-react
```

Create .eslintsrc and extend this config.

```json
{
    "extends": "ffe"
}
```

If you are not using React see eslint-config-ffe-base.

### jsx-a11y-plugin

Additionally install the a11y-plugin:

```bash
npm i -D eslint-plugin-jsx-a11y
```

Include the rules in .eslintsrc:

```json
{
    "extends": [
        "ffe",
        "ffe/rules/jsx-a11y"
    ]
}
```
