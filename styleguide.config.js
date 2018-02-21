const path = require('path');
const components = require('./styleguide.components');

module.exports = {
    title: 'FFE',
    require: [
        'babel-polyfill',
        path.join(__dirname, 'dist/ffe.css'),
        path.join(__dirname, 'src/styles/styles.less'),
    ],
    components: 'packages/ffe-*-react/src/**/[A-Z]+([A-Za-z]).js',
    styleguideComponents: components,
    styleguideDir: 'dist/styleguidist',
    theme: {
        color: {
            link: '#676767',
            linkHover: '#0071CD',
            sidebarBackground: '#F4F4F4',
            codeBackground: '#F8F5EB',
        },
        fontFamily: {
            base: ['MuseoSans-500', 'arial', 'sans-serif'],
        },
    },
    assetsDir: './static',
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
                {
                    test: /\.less$/,
                    use: [
                        { loader: 'style-loader' },
                        { loader: 'css-loader' },
                        { loader: 'less-loader' },
                    ],
                },
            ],
        },
    },
    template: 'src/styleguidist.html',
    sections: [
        {
            name: 'Knapper',
            content: 'packages/ffe-buttons-react/USAGE.md',
            components:
                'packages/ffe-buttons-react/src/[A-Z]+([A-Za-z]).js',
        },
        {
            name: 'Typografi',
            content: 'packages/ffe-core-react/USAGE.md',
            components:
                'packages/ffe-core-react/src/typography/[A-Z]+([A-Za-z]).js',
        },
        {
            name: 'Lister',
            components:
                'packages/ffe-lists-react/src/[A-Z]+([A-Za-z]).js',
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
            components:
                'packages/ffe-accordion-react/src/Accordion*.js',
        },
        {
            name: 'Kontovelger',
            components:
                'packages/ffe-account-selector-react/src/components/**/[A-Z]+([A-Za-z]).js',
        },
        {
            name: 'Kort',
            components:
                'packages/ffe-cards-react/src/[A-Z]+([A-Za-z]).js',
        },
        {
            name: 'Meldinger',
            sections: [
                {
                    name: 'Meldinger, bokser',
                    components:
                        'packages/ffe-message-box-react/src/[A-Z]+([A-Za-z]).js',
                },
                {
                    name: 'Meldinger, kontekstuelle',
                    components:
                        'packages/ffe-context-message-react/src/[A-Z]+([A-Za-z]).js',
                },
                {
                    name: 'Systemmeldinger',
                    content: 'packages/ffe-system-message-react/USAGE.md',
                    components:
                        'packages/ffe-system-message-react/src/System{Error,Info,News,Success}Message.js',
                },
            ],
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
            components:
                'packages/ffe-grid-react/src/[A-Z]+([A-Za-z]).js',
        },
        {
            name: 'Detaljliste',
            components:
                'packages/ffe-details-list-react/src/[A-Z]+([A-Za-z]).js',
        },
        {
            name: 'Tabeller',
            content: 'packages/ffe-tables-react/USAGE.md',
            components: 'packages/ffe-tables-react/src/Table.js',
        },
        {
            name: 'Skjema',
            components:
                'packages/ffe-form-react/src/[A-Z]+([A-Za-z]).js',
        },
        {
            name: 'Checkbox',
            components:
                'packages/ffe-checkbox-react/src/[A-Z]+([A-Za-z]).js',
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
        {
            name: 'Spinners',
            components:
                'packages/ffe-spinner-react/src/[A-Z]+([A-Za-z]).js',
        },
        {
            name: 'Faner',
            components:
                'packages/ffe-tabs-react/src/[A-Z]+([A-Za-z]).js',
        },
    ],
};
