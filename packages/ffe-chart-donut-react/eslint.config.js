// eslint.config.js for ffe-chart-donut-react
import rootConfig from '../../eslint.config.js';

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
    },
];
