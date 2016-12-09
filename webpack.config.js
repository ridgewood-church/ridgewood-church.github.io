'use strict';

var webpack = require('webpack');
var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  cache: true,
  entry: ['./src/index.js'],
  output: {
    path: 'dist',
    filename: 'js/bundle.min.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.json$/, 
        loader: 'json',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js$/, 
        loader: 'babel', 
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css!sass'
        ) 
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compressor: {
        warnings: false
      }
    }),
    new ExtractTextPlugin("css/bundle.min.css"),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `'production'`
    })
  ]
};
