const path = require('path');

module.exports = {
    title: 'FFE',
    require: ['babel-polyfill', path.join(__dirname, 'dist/ffe.css')],
    components: 'packages/ffe-*-react/src/**/[A-Z]+([A-Za-z]).js',
    webpackConfig: {
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    use: ['babel-loader'],
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader?url=false'],
                },
            ],
        },
    },
    sections: [
        {
            name: 'Knapper',
            content: 'packages/ffe-buttons-react/USAGE.md',
            components: 'packages/ffe-buttons-react/src/[A-Z]+([A-Za-z]).js',
        },
        {
            name: 'Typografi',
            content: 'packages/ffe-core-react/USAGE.md',
            components:
                'packages/ffe-core-react/src/typography/[A-Z]+([A-Za-z]).js',
        },
        {
            name: 'Kakediagram',
            content: 'packages/ffe-chart-donut-react/USAGE.md',
            components:
                'packages/ffe-chart-donut-react/src/[A-Z]+([A-Za-z]).js',
        },
        {
            name: 'Accordion',
            components: 'packages/ffe-accordion-react/src/Accordion*.js',
        },
        {
            name: 'Kontovelger',
            components:
                'packages/ffe-account-selector-react/src/components/**/[A-Z]+([A-Za-z]).js',
        },
        {
            name: 'Kort',
            components: 'packages/ffe-cards-react/src/[A-Z]+([A-Za-z]).js',
        },
        {
            name: 'Meldinger',
            components:
                'packages/ffe-context-message-react/src/[A-Z]+([A-Za-z]).js',
        },
        {
            name: 'Søkbar dropdown',
            components:
                'packages/ffe-searchable-dropdown-react/src/SearchableDropdown.js',
        },
        {
            name: 'Grid',
            content: 'packages/ffe-grid-react/USAGE.md',
            components: 'packages/ffe-grid-react/src/[A-Z]+([A-Za-z]).js',
        },
    ],
};
