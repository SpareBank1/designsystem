const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractLESS = new ExtractTextPlugin('[name].css');

module.exports = {
    title: 'FFE Searchable Dropdown React',
    styleguideDir: 'examples',
    require: [
        "./less/styleguide.less",
    ],
    components: 'src/**/[A-Z]*.js',
    context: {
        mockCustomExample: '../mock/mockCustomExample',
        mockTwoValueListElementExample: '../mock/mockTwoValueListElementExample',
        mockDefaultExample: '../mock/mockDefaultExample',
    },
    webpackConfig: {
        entry: {
            'searchable-dropdown': './src/SearchableDropdown.js'
        }
        ,
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'lib')
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: [ 'babel-loader' ],
                    exclude: /node_modules/
                },
                {
                    test: /\.less$/,
                    use: extractLESS.extract([ 'css-loader', 'postcss-loader', 'less-loader' ])
                },
                {
                    test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                    loader: 'file-loader?name=fonts/[name].[ext]'
                }
            ]
        },
        plugins: [
            extractLESS
        ]
    }

};
