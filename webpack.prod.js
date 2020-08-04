const path = require('path');
const { merge } = require('webpack-merge');
const defaultConfig = require('./webpack.config.js');

module.exports = merge(defaultConfig, {
    mode: 'production',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
});