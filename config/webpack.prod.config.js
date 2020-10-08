const path = require('path');
const { Config } = require('webpack-config');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

const rootPath = path.join(__dirname, '..');
const entryFilePath = path.join(rootPath, 'src/index');

const config = {
  mode: 'production',
  entry: {
    'mohwa-ui': entryFilePath,
    'mohwa-ui.min': entryFilePath,
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
      //     use: [
      //       {
      //         loader: 'css-loader',
      //         options: { minimize: true },
      //       },
      //       'sass-loader',
      //     ],
      //   }),
      // },
    ],
  },
  // plugins: [new ExtractTextPlugin('[name].css')],
};

module.exports = new Config().extend(path.join(__dirname, 'webpack.base.config.js')).merge(config);
