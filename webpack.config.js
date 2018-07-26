/*
    ./webpack.config.js
*/
const path = require('path');
module.exports = {
  entry: ['whatwg-fetch', './wp-content/themes/alberici-hillsdale/js/react_src/news.js'],
  output: {
    path: path.resolve('wp-content/themes/alberici-hillsdale/js/react_src/dist'),
    filename: 'news.js',
    publicPath: '/wp-content/themes/alberici-hillsdale/js/react_src/dist/'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}
