var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'js'),
  entry: ['app'],
  output: {
    path: path.join(__dirname, 'dist'),
    filanme: 'bundle.js'
  }
}
