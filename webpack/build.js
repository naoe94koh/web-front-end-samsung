const { merge } = require('webpack-merge');

const commonConfig = require('./common');

const buildConfig = merge(commonConfig, {
  mode: 'production',
  devtool: false,
});

module.exports = buildConfig;
