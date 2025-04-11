// eslint.config.js for ffe-icons
import rootConfig from '../../eslint.config.js';

export default [
    ...rootConfig,
    {
        // Ignore large generated files in icons package
        ignores: ['**/*.svg', 'generated/**'],
    },
];
