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

if you are not using react see eslint-config-ffe-base
