const path = require('path');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: ['webpack-dev-server/client?http://localhost:8081', './src/example'],
    output: {
        path: path.join(__dirname, 'tmp'),
        filename: 'bundle.js',
        publicPath: '/tmp/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
};
