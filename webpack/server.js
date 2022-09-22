const devServer = {
  port: 3000,
  open: false,
  compress: true,
  static: ['public'],
  client: {
    overlay: true,
  },
};

module.exports = devServer;
