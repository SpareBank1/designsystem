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

## Migration Guide for ESLint 9

Version 9.0.0 of this package upgrades to ESLint 9, which requires Node.js 18 or later and includes significant changes to the configuration system.

ESLint 9 introduces the new flat config system as the default and removes support for the legacy config format. Here's how to migrate your project:

### 1. Update your ESLint configuration

Create an `eslint.config.js` file (instead of `.eslintrc.js`) in your project root:

```js
// eslint.config.js
import ffeConfig from '@sb1/eslint-config-ffe';

export default [
    ...ffeConfig,
    // Your project-specific overrides here
];
```

### 2. Use ES modules syntax

ESLint 9 requires ES module syntax. Make sure your config file uses `import`/`export` instead of `require`/`module.exports`.

### 3. Update structure of custom rules

If you have custom rules, migrate them to the flat config format:

```js
// Old format
{
  rules: {
    'react/prop-types': 'off'
  },
  globals: {
    window: true
  }
}

// New format
{
  rules: {
    'react/prop-types': 'off'
  },
  languageOptions: {
    globals: {
      window: true
    }
  }
}
```

### 4. Update dependencies

Make sure your `package.json` has updated peer dependencies:

```diff
- "eslint": "^8.0.0",
+ "eslint": "^9.0.0",
```

### 5. Prettier compatibility

If you're using Prettier, update to the latest eslint-config-prettier for compatibility with flat configs.

For more information, refer to the [ESLint 9 migration guide](https://eslint.org/docs/latest/use/configure/migration-guide).

## Contribute

Contributions are welcome. Please check out our [contribution guide](../../CONTRIBUTING.md)
