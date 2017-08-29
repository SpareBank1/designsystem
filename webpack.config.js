const path = require('path');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        './docs/index.jsx'
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, 'temp'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: 'eslint-loader',
                enforce: 'pre',
                exclude: /node_modules/
            }, {
                test: /\.jsx?/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    cacheDirectory: './webpack-cache/'
                }
            }, {
                test: /\.less$/,
                loaders: ['style-loader', 'css-loader', 'less-loader']
            }, {
                test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }
        ]
    }
};
