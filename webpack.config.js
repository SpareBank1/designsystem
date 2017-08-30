const path = require('path');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        './src/example'
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, 'temp'),
        filename: 'bundle.js',
        publicPath: '/temp/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    }
};