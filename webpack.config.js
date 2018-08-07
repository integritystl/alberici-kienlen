/*
    ./webpack.config.js
*/
const path = require('path');
module.exports = {
  entry: ['whatwg-fetch', './wp-content/themes/alberici-hillsdale/js/react_src/card-list-view.js'],
  output: {
    path: path.resolve('wp-content/themes/alberici-hillsdale/js/react_src/dist'),
    filename: 'card-list-view.js',
    publicPath: '/wp-content/themes/alberici-hillsdale/js/react_src/dist/'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}
