const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    // 'webpack/hot/dev-server',
    // 'webpack/hot/only-dev-server',
    'babel-polyfill',
    path.join(__dirname, '/src/app/app.js')
  ],
  devServer: {
    contentBase: 'src/www',
    port: 3001,
    headers: {"Access-Control-Allow-Origin": "*"},
  },
  output: {
    path: path.resolve(__dirname, 'src/www'),
    filename: 'app.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: path.join(__dirname, '/src/www/index.html'),
    })
  ],
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0'],
        },
      },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0'],
        }
      }
    ]
  }
};
