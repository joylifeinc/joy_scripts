let path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin'),
  fs = require('fs'),
  minimist = require('minimist'),
  options = minimist(process.argv.slice(2));

const { resolveProjectDirectory, projectRoot } = require('./paths');
const _config = resolveProjectDirectory('config');
const _source = resolveProjectDirectory('src');
const _dist = resolveProjectDirectory('dist');
const _assets = resolveProjectDirectory('assets');

let pkg = require(resolveProjectDirectory('package.json'));

let entry = {
  [pkg.name]: [_source + '/client.tsx']
};

const plugins = [
  new HtmlWebpackPlugin({
    template: _source + '/index.html'
  }),
  new CaseSensitivePathsPlugin(),
  new CleanWebpackPlugin([_dist], { allowExternal: true }),
  new webpack.optimize.CommonsChunkPlugin({
    filename: '[name].[hash].js',
    children: true
  }),
  new webpack.IgnorePlugin(/(locale)/, /node_modules.+(moment)/),
  new webpack.SourceMapDevToolPlugin({
    filename: '[file].map'
  }),
  new ExtractTextPlugin({
    filename: '[name].css',
    disable: false,
    allChunks: true
  })
];

const cssLoader = {
  test: /\.css$/,
  loader: 'style-loader!css-loader'
};

module.exports = {
  context: projectRoot,
  entry: entry,
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    path: _dist,
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
    alias: {
      '~src': _source
    }
  },
  plugins: plugins,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['syntax-dynamic-import'],
            presets: ['env']
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff|ttf|eot|svg|woff2)/,
        loader: 'url-loader?limit=512&name=/src/assets/[name].[ext]',
        options: {
          publicPath: '/src/assets/'
        }
      },
      cssLoader
    ]
  },
}