const fs = require('fs');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MiniHtmlWebpackPlugin = require('mini-html-webpack-plugin');

const components = require('./styleguide.components');

const PRODUCTION = process.env.NODE_ENV === 'production';

const PACKAGES_WITH_DEFAULT_EXPORT = [
    'ffe-chart-donut-react',
    'ffe-checkbox-react',
    'ffe-dropdown-react',
    'ffe-file-upload-react',
    'ffe-searchable-dropdown-react',
    'ffe-spinner-react',
    'ffe-tables-react',
];

module.exports = {
    title: 'FFE',
    require: [
        'babel-polyfill',
        path.join(__dirname, 'packages/ffe-all.less'),
        path.join(__dirname, 'src/styles/styles.less'),
    ],
    components: 'packages/ffe-*-react/src/**/[A-Z]+([A-Za-z]).js',
    getComponentPathLine(componentPath) {
        /**
         * Matches a starting "packages/", then creates a capture group for whatever is between
         * "packages/" and the next occurence of "/". The goal is to capture the folder name
         * for the package holding the current component.
         */
        const regexpResult = /^packages\/(.+?)\//.exec(path.dirname(componentPath));
        if (regexpResult === null) {
            return componentPath;
        }
        const packageName = regexpResult[1];
        const name = path.basename(componentPath, '.js');
        const isDefaultExport = PACKAGES_WITH_DEFAULT_EXPORT.includes(packageName);
        if (isDefaultExport) {
            return `import ${name} from '@sb1/${packageName}';`
        }
        return `import { ${name} } from '@sb1/${packageName}';`;
    },
    ignore: [
        '**/__tests__/**',
        '**/*.test.{js,jsx,ts,tsx}',
        '**/*.spec.{js,jsx,ts,tsx}',
        '**/Base*.js',
        '**/InlineBase*.js',
    ],
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
                    use: PRODUCTION
                        ? [MiniCssExtractPlugin.loader, 'css-loader?url=false','postcss-loader']
                        : ['style-loader', 'css-loader?url=false', 'postcss-loader'],
                    exclude: /node_modules/,
                },
                {
                    test: /\.less$/,
                    use: PRODUCTION
                        ? [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
                        : ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
                    exclude: /node_modules/,
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'styles.css',
            })
        ],
    },
    template: ({ css, js, publicPath, title }) => {
        const template = fs.readFileSync(
            path.join(__dirname, 'src', 'styleguidist.html'),
            'utf-8'
        );
        return template
            .replace(
                '<!-- MiniHtmlWebpackPlugin:Title -->',
                `<title>${title}</title>`
            )
            .replace(
                '<!-- MiniHtmlWebpackPlugin:CSS -->',
                MiniHtmlWebpackPlugin.generateCSSReferences(css, publicPath)
            )
            .replace(
                '<!-- MiniHtmlWebpackPlugin:JS -->',
                MiniHtmlWebpackPlugin.generateJSReferences(js, publicPath)
            );
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
            name: 'Lister',
            components: 'packages/ffe-lists-react/src/[A-Z]+([A-Za-z]).js',
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
            content: 'packages/ffe-account-selector-react/USAGE.md',
            components:
                'packages/ffe-account-selector-react/src/components/**/[A-Z]+([A-Za-z]).js',
        },
        {
            name: 'Kort',
            components: 'packages/ffe-cards-react/src/[A-Z]+([A-Za-z]).js',
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
            components: 'packages/ffe-grid-react/src/[A-Z]+([A-Za-z]).js',
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
            components: 'packages/ffe-form-react/src/[A-Z]+([A-Za-z]).js',
        },
        {
            name: 'Checkbox',
            components: 'packages/ffe-checkbox-react/src/[A-Z]+([A-Za-z]).js',
        },
        {
            name: 'Radioknapper',
            components: 'packages/ffe-radio-button-react/src/[A-Z]+([A-Za-z]).js',
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
            components: 'packages/ffe-spinner-react/src/[A-Z]+([A-Za-z]).js',
        },
        {
            name: 'Faner',
            components: 'packages/ffe-tabs-react/src/[A-Z]+([A-Za-z]).js',
        },
    ],
};
