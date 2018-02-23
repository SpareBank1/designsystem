# @sb1/eslint-config-ffe

Recommended eslint config used for FFE components. Based on eslint-config-airbnb, but without any styling rules.

## Install

```bash
npm install --save-dev eslint @sb1/eslint-config-ffe eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y
```

## Usage

Create `.eslintsrc` in the same directory as your `package.json` and extend this config:

```json
{
    "extends": "@sb1/ffe"
}
```

NB: If you are not using React see `@sb1/eslint-config-ffe-base`.
