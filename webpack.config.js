const path = require('path');
const { Config, environment } = require('webpack-config');

module.exports = env => {
  environment.setAll();
  return new Config().extend(path.join(__dirname, 'config', `webpack.${env}.config.js`));
};
