const path = require('path');
const __ROOT = process.cwd();

const commonConfig = {
  target: 'web',
  // target: ['web', 'browserslist'],
  // resolve: {
  //   extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.wasm'],
  // },
  entry: {
    main: path.join(__ROOT, 'src/index.js'),
  },
  output: {
    path: path.join(__ROOT, 'public'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};

module.exports = commonConfig;
