import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import ffeConfig from './linting/eslint-config-ffe/index.js';

export default [
    ffeConfig,
    prettierConfig,
    {
        plugins: {
            '@typescript-eslint': tseslint,
            prettier: prettierPlugin,
        },
        languageOptions: {
            parser: tsParser,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            'no-duplicate-imports':"off", // Skru av denne fordi den krasjer med import/no-duplicates
            'import/no-duplicates': "warn",
            'no-use-before-define': "off",
            '@typescript-eslint/no-use-before-define': [2],
            'prettier/prettier': 'error',
        },
    },
    {
        files: ['**/*.spec.js', '**/*.spec.tsx', '**/*.spec.ts'],
        languageOptions: {
            globals: {
                // Jest globals
                jest: 'readonly',
                describe: 'readonly',
                it: 'readonly',
                test: 'readonly',
                expect: 'readonly',
                beforeEach: 'readonly',
                afterEach: 'readonly',
                beforeAll: 'readonly',
                afterAll: 'readonly',
                // Testing utility globals
                shallow: 'readonly',
                mount: 'readonly',
                render: 'readonly',
            },
        },
    },
];
