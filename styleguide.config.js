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
            name: 'Formatering',
            content: 'packages/ffe-formatters/USAGE.md',
        },
        {
            name: 'Ikoner',
            content: 'packages/ffe-icons-react/USAGE.md',
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
            name: 'Dropdowns',
            components: () => [
                'packages/ffe-searchable-dropdown-react/src/SearchableDropdown.js',
                'packages/ffe-dropdown-react/src/Dropdown.js',
            ],
        },
        {
            name: 'Grid',
            content: 'packages/ffe-grid-react/USAGE.md',
            components: 'packages/ffe-grid-react/src/[A-Z]+([A-Za-z]).js',
        },
        {
            name: 'Tabeller',
            content: 'packages/ffe-tables-react/USAGE.md',
            components: 'packages/ffe-tables-react/src/Table.js',
        },
        {
            name: 'Skjema',
            components: 'packages/ffe-form-react/src/[A-Z]+([A-Za-z]).js',
        },
        {
            name: 'Checkbox',
            components: 'packages/ffe-checkbox-react/src/[A-Z]+([A-Za-z]).js',
        },
        {
            name: 'Datepicker',
            components:
                'packages/ffe-datepicker-react/src/**/{Datepicker,Calendar,Input}.js',
        },
        {
            name: 'Filopplasting',
            components:
                'packages/ffe-file-upload-react/src/[A-Z]+([A-Za-z]).js',
        },
    ],
};
