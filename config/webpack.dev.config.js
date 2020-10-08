const path = require('path');
const { Config } = require('webpack-config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

const rootPath = path.join(__dirname, '..');
const entryFilePath = path.join(rootPath, 'src/index');

const config = {
  mode: 'development',
  entry: {
    'mohwa-ui': entryFilePath,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      // {
      //   test: /\.scss$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: ['css-loader', 'sass-loader'],
      //   }),
      // },
    ],
  },
  devServer: {
    host: 'localhost',
    port: '9998 ',
    writeToDisk: true,
    proxy: {
      '/suggest/search': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      inject: 'head',
      template: path.join(rootPath, 'template', 'index.html'),
    }),
  ],
};

module.exports = new Config().extend(path.join(__dirname, 'webpack.base.config.js')).merge(config);
