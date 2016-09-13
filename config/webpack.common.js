var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  resolve: {
    extensions: ['', '.js', '.ts'],
    modulesDirectories: ['node_modules', '']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts'
      },
      {
        test: /\.html$/,
        loader: 'html!html-minify'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[hash].[ext]'
      },
      {
        test: /\.scss$/,
        loader: 'css-to-string!css!postcss!sass',
        exclude: [helpers.root('src/main.scss')]
      },
      {
        test: /\.scss$/,
        include: [helpers.root('src/main.scss')],
        loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],

  htmlLoader: {
    minimize: false
  },

  'html-minify-loader': {
    empty: true,
    quotes: true,
    dom: {
      lowerCaseAttributeNames: false
    }
  }
};
