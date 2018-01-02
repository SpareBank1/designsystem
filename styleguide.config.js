const path = require('path');

module.exports = {
    title: 'FFE',
    require: [
        'babel-polyfill',
        path.join(__dirname, 'dist/ffe.css'),
    ],
    components: 'packages/ffe-*-react/src/**/[A-Z]+([A-Za-z]).js',
    webpackConfig: {
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    use: ['babel-loader'],
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader?url=false']
                },
            ],
        },
    },
    sections: [
        {
            name: 'Knapper',
            content: 'packages/ffe-buttons-react/USAGE.md',
            components: 'packages/ffe-buttons-react/src/[A-Z]+([A-Za-z]).js'
        },
        {
            name: 'Typografi',
            content: 'packages/ffe-core-react/USAGE.md',
            components: 'packages/ffe-core-react/src/typography/[A-Z]+([A-Za-z]).js'
        },
        {
            name: 'Accordion',
            components: 'packages/ffe-accordion-react/src/Accordion*.js',
        }
    ],
};
