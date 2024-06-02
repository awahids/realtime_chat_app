module.exports = {
  test: /\.vue$/,
  use: [{
    loader: 'vue-loader',
    options: {
      loaders: {
        js: 'babel-loader'
      }
    }
  }]
}
