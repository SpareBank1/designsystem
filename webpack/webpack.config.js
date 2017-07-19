var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        './src/ffe-file-upload-react'
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        filename: 'bundle.js',
        publicPath: 'static/'
    },
    module: {
        loaders: [{
            test: /\.jsx?/,
            loaders: ['babel', 'eslint-loader'],
            include: path.join(__dirname, 'src'),
            exclude: '/node_modules/'
        }, {
            test: /\.json$/,
            loaders: ['json-loader'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        }]
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ],
    eslint: {
        configFile: './.eslintrc'
    }
};
