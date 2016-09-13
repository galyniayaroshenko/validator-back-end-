var helpers = require('./helpers');

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['ts']
      },
      {
        test: /\.html$/,
        loader: 'html'

      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'null'
      },
      {
        test: /\.scss$/,
        loader: 'raw!sass',
        exclude: [helpers.root('src/app/main.scss')]
      },
      {
        test: /\.scss$/,
        loader: 'nuil',
        include: [helpers.root('src/app/main.scss')]
      }
    ]
  }
}
