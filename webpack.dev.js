const path = require('path');
const { merge } = require('webpack-merge');
const defaultConfig = require('./webpack.config.js');

module.exports = merge(defaultConfig, {
    mode: 'development',
    output: {
        filename: 'bundle-dev.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
    },
});