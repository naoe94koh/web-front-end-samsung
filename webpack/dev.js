const { merge } = require('webpack-merge');

const commonConfig = require('./common');
const devServer = require('./server');

const devConfig = merge(commonConfig, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  devServer,
});

module.exports = devConfig;
