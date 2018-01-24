const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.config.base.js');
const { resolveProjectDirectory, tsConfig } = require('./paths');

const _source = resolveProjectDirectory('src');
const _dist = resolveProjectDirectory('dist');
const _assets = resolveProjectDirectory('assets');

const tsLoader = {
  test: /\.tsx?$/,
  loader: [
    'react-hot-loader/webpack',
    `ts-loader?${JSON.stringify({ configFile: tsConfig })}`
  ],
  exclude: /node_modules/
};

module.exports = merge(base, {
  entry: [
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    _source + '/client.tsx'
  ],
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  module: {
    rules: [
      tsLoader
    ]
  },
  devServer: {
    contentBase: [_dist, _assets],
    compress: true,
    historyApiFallback: true,
    hot: true,
    host: 'local.withjoy.com',
    port: 8474,
    open: false
  }
});