const path = require('path');
const { Config } = require('webpack-config');

const rootPath = path.join(__dirname, '..');
const outputPath = path.join(rootPath, 'dist');
const srcPath = path.join(rootPath, 'src');
const testPath = path.join(rootPath, 'test');

const config = {
  output: {
    path: outputPath,
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'MohwaUI',
    globalObject: 'this',
  },
  context: rootPath,
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [srcPath, testPath],
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.json'],
    alias: {
      '@assets': path.join(srcPath, 'assets'),
      '@components': path.join(srcPath, 'components'),
      '@utils': path.join(srcPath, 'utils'),
    },
  },
};

module.exports = new Config().merge(config);
