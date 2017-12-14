const path = require('path');

module.exports = {
    title: 'FFE',
    require: [
        'babel-polyfill',
        path.join(__dirname, 'dist/ffe.css')
    ],
    components: 'packages/ffe-*-react/src/**/[A-Z]*.js',
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
                }
            ]
        }
    }
};
