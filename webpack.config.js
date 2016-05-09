module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        './example'
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: 'temp/',
        filename: 'bundle.js',
        publicPath: '/temp/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel'
            }
        ]
    }
};