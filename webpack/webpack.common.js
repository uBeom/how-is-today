const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve('src', './index.tsx'),
  output: {
    filename: 'main.js',
    path: path.resolve('dist'),
    clean: true,
  },
  resolve: {
    alias: {
      '@': path.resolve('src'),
    },
    modules: ['node_modules'],
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: path.resolve('public', './index.html'),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
