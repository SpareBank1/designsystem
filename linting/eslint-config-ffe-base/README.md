# @sb1/eslint-config-ffe-base

Recommended eslint config used for FFE components. Based on eslint-config-airbnb, but without any styling rules.

## Install

```bash
npm install --save-dev eslint @sb1/eslint-config-ffe-base eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y
```

## Usage

Create `.eslintsrc` in the same directory as your `package.json` and extend this config:

```json
{
    "extends": "@sb1/ffe-base"
}
```

NB: If you are using React see `@sb1/eslint-config-ffe`.
