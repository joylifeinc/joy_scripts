const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.config.base.js');
const { resolveProjectDirectory, tsConfig } = require('./paths');
const _source = resolveProjectDirectory('src');

const tsLoader = {
  test: /\.tsx?$/,
  loader: [
    `ts-loader?${JSON.stringify({ configFile: tsConfig })}`
  ],
  exclude: /node_modules/
};

module.exports = merge(base, {
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],
  module: {
    rules: [
      tsLoader
    ]
  }
});