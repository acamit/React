const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CommonConfig = require('./webpack.common.config.js');
const Merge = require('webpack-merge');

module.exports =  Merge(CommonConfig,{
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'eslint-loader',
                    options: {
                        fix: true
                    }
                }
            }
        ]
    },
});