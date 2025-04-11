// eslint.config.js for ffe-message-box-react
import rootConfig from '../../eslint.config.js';

// This creates a configuration for the package by using the root configuration
// and adding any package-specific rules
export default [
    ...rootConfig,
    {
        // React-specific configuration
        files: ['**/*.jsx', '**/*.tsx'],
        settings: {
            react: {
                version: 'detect',
            },
        },
        // Example: ignoring specific files or adding particular rules for this package
        // files: ['**/*.js'],
        // rules: { ... }
    },
];
