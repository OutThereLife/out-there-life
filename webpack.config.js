var path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  context: 'build',
  entry: [ './js/index' ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    root: [ 'build' ],
    extensions: [ '', '.js', '.jsx' ],
    modulesDirectories: [ path.join(__dirname, 'node_modules') ]
  },
  resolveLoader: {
    modulesDirectories: [ path.join(__dirname, 'node_modules') ]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: 'build/js',
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'spec'),
        loaders: [ 'babel' ]
      },
      {
        test: /.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|json|gif)$/,
        loaders: [ 'url' ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'html/index.html'})
  ]
}
