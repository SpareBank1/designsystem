// eslint.config.js for ffe-formatters
import rootConfig from '../../eslint.config.js';

export default [
    ...rootConfig,
    {
        // Package-specific overrides if needed
        files: ['**/*.js'],
        rules: {
            // Any specific rules for formatters package
        },
    },
];
