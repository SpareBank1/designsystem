module.exports = {
    extends: [
        '../../linting/eslint-config-ffe/index.js',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'react/react-in-jsx-scope': 'off',
        'no-duplicate-imports': 0, // Skru av denne fordi den krasjer med import/no-duplicates
        'import/no-duplicates': 2,
        'no-use-before-define': 0,
        '@typescript-eslint/no-use-before-define': [2],
    },
    overrides: [
        {
            files: ['**/*.spec.js', '**/*.spec.tsx', '**/*.spec.ts'],
            env: {
                jest: true,
            },
            globals: {
                shallow: 'readonly',
                mount: 'readonly',
                render: 'readonly',
            },
        },
    ],
};
