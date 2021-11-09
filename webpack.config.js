const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: ['html-loader', './markdown-loader'],
      },
    ],
  },
}
