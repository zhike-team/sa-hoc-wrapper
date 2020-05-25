const path = require('path');

module.exports = {
  entry: './lib/saWrapper.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
    libraryTarget: 'umd',
    library: 'saWrapper',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}