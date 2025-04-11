// For ESLint v9 flat config system
export default {
    languageOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
        globals: {
            // Browser globals
            window: 'readonly',
            document: 'readonly',
            // Node globals
            process: 'readonly',
            __dirname: 'readonly',
        },
    },
    linterOptions: {
        reportUnusedDisableDirectives: true,
    },
    plugins: {
        // Import plugins properly for ESM compatibility
        react: (await import('eslint-plugin-react')).default,
        'jsx-a11y': (await import('eslint-plugin-jsx-a11y')).default,
        'react-hooks': (await import('eslint-plugin-react-hooks')).default,
        import: (await import('eslint-plugin-import')).default,
    },
    // Core ESLint rules
    rules: {
        // React rules
        'react/jsx-boolean-value': ['error', 'always'],
        'react/jsx-key': ['error'],
        'react/jsx-no-duplicate-props': ['error'],
        'react/jsx-no-undef': ['error'],
        'react/jsx-pascal-case': ['error'],
        'react/jsx-uses-react': ['error'],
        'react/jsx-uses-vars': ['error'],
        'react/jsx-first-prop-new-line': ['error', 'multiline'],
        'react/jsx-closing-bracket-location': ['error'],
        'react/no-danger': ['error'],
        'react/no-did-mount-set-state': ['error'],
        'react/no-did-update-set-state': ['error'],
        'react/no-direct-mutation-state': ['error'],
        'react/no-is-mounted': ['error'],
        'react/no-multi-comp': ['error', { ignoreStateless: true }],
        'react/no-unknown-property': ['error'],
        'react/prefer-es6-class': ['error', 'always'],
        'react/prefer-stateless-function': ['error'],
        'react/react-in-jsx-scope': ['error'],
        'react/require-render-return': ['error'],
        'react/self-closing-comp': ['error'],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',

        // A11y rules
        'jsx-a11y/aria-props': 'error',
        'jsx-a11y/aria-proptypes': 'error',
        'jsx-a11y/aria-role': 'error',
        'jsx-a11y/aria-unsupported-elements': 'error',
        'jsx-a11y/anchor-is-valid': 'error',
        'jsx-a11y/alt-text': 'error',
        'jsx-a11y/img-redundant-alt': 'error',
        'jsx-a11y/label-has-for': ['error', { required: 'id' }],
        'jsx-a11y/mouse-events-have-key-events': 'error',
        'jsx-a11y/no-access-key': 'error',
        'jsx-a11y/interactive-supports-focus': 'error',
        'jsx-a11y/no-static-element-interactions': 'error',
        'jsx-a11y/no-noninteractive-element-interactions': 'error',
        'jsx-a11y/role-has-required-aria-props': 'error',
        'jsx-a11y/role-supports-aria-props': 'warn',
        'jsx-a11y/tabindex-no-positive': 'error',
    },
};
