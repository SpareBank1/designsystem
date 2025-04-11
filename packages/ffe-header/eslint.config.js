// eslint.config.js for ffe-header
import rootConfig from '../../eslint.config.js';

// This creates a configuration for the package by using the root configuration
// and adding any package-specific rules
export default [
    ...rootConfig,
    {
        // Package-specific configuration here
        // Example: ignoring specific files or adding particular rules for this package
        // files: ['**/*.js'],
        // rules: { ... }
    },
];
