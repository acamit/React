const webpack  = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.config.js');

module.exports = Merge(CommonConfig, {
  devtool: 'eval',

  plugins: [
      new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }), 
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
   
  ]
});