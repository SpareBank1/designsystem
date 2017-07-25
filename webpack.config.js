var path = require('path');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        './docs/index.jsx'
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: ['node_modules']
    },
    output: {
        path: path.resolve(__dirname, 'temp'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel-loader', 'eslint-loader'],
            exclude: '/node_modules/'
        }, {
            test: /\.less$/,
            loaders: ['style-loader', 'css-loader', 'less-loader']
        }, {
            test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
            loader: 'file-loader?name=fonts/[name].[ext]'
        }]
    }
};
