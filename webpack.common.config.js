const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const ExtractLess = new ExtractTextPlugin({
    filename: "[name].[contenthash].less.css",
});

const ExtractCSS = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
});

module.exports = {
    entry: [
        "babel-polyfill",
        "webpack-hot-middleware/client?reload=true",
        './src/js/index.js'
    ],
    output: {
        filename: "bundle.[name].js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        historyApiFallback: true
    },
    module: {
        rules: [

            {
                test: /\.css$/,
                use: ExtractCSS.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }, {
                test: /\.less$/,
                use: ExtractLess.extract({
                    use: [{
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: "less-loader",
                        options: {
                            sourceMap: true
                        }
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },

            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader?name=[name].[ext]"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react', "stage-2", "stage-0", "react-hmre"]
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
       ExtractLess, 
       ExtractCSS
    ]
};