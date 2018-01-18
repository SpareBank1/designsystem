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
    sections: [
        {
            name: 'Kom i gang',
            content: 'src/content/kom-i-gang/index.md',
            sections: [
                {
                    name: 'Introduksjon',
                    content: 'src/content/kom-i-gang/introduksjon/index.md',
                },
                {
                    name: 'For designere',
                    content: 'src/content/kom-i-gang/for-designere/index.md',
                },
                {
                    name: 'For utviklere',
                    content: 'src/content/kom-i-gang/for-utviklere/index.md',
                },
                {
                    name: 'Om FFE',
                    content: 'src/content/kom-i-gang/om-ffe/index.md',
                },
            ],
        },
        {
            name: 'Merkevare',
            content: 'src/content/merkevare/index.md',
            sections: [
                {
                    name: 'Introduksjon',
                    content: 'src/content/merkevare/introduksjon/index.md',
                },
                {
                    name: 'Profil',
                    content: 'src/content/merkevare/profil/index.md',
                },
                {
                    name: 'Stil og tone',
                    content: 'src/content/merkevare/stil-og-tone/index.md',
                },
                {
                    name: 'Redaksjonelt',
                    content: 'src/content/merkevare/redaksjonelt/index.md',
                },
            ],
        },
        {
            name: 'Visuell stil',
            content: 'src/content/visuell-stil/index.md',
            sections: [
                {
                    name: 'Oversikt',
                    content: 'src/content/visuell-stil/oversikt/index.md',
                },
                {
                    name: 'Farger',
                    content: 'src/content/visuell-stil/farger/index.md',
                },
                {
                    name: 'Ikoner',
                    content: 'src/content/visuell-stil/ikoner/index.md',
                },
                {
                    name: 'Typografi',
                    content: 'src/content/visuell-stil/typografi/index.md',
                },
                {
                    name: 'Illustrasjoner',
                    content: 'src/content/visuell-stil/illustrasjoner/index.md',
                },
                {
                    name: 'Animasjoner',
                    content: 'src/content/visuell-stil/animasjoner/index.md',
                },
                {
                    name: 'Layout',
                    content: 'src/content/visuell-stil/layout/index.md',

                    sections: [
                        {
                            name: 'Grid',
                            content:
                                'src/content/visuell-stil/layout/grid/index.md',
                        },
                    ],
                },
            ],
        },

        {
            name: 'Komponenter',
            content: 'src/content/komponenter/index.md',
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
            ],
        },
    ],
};
