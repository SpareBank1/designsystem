const express = require('express');
const path = require('path');
const logger = require('morgan');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const apiRouter = require('./apiRoutes');

const webpackCompiler = webpack({
    entry: ['webpack-hot-middleware/client', './webapp/index.js'],
    output: {
        publicPath: '/',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                        },
                    },
                ],
            },
        ],
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js',
        },
    },
});

const staticDir = path.join(__dirname, 'public');

const app = express();

app.use(logger('dev'));
app.use(webpackDevMiddleware(webpackCompiler, { publicPath: '/' }));
app.use(webpackHotMiddleware(webpackCompiler));
app.use(express.json());
app.use('/api/sections', apiRouter);
app.get('/sections/:reference', (req, res) => {
    res.sendFile(path.join(staticDir, 'index.html'));
});
app.use(express.static(staticDir));

module.exports = app;
