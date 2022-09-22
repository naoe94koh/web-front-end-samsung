const path = require('path');
const __ROOT = process.cwd();

const commonConfig = {
  target: ['web'],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.wasm'],
  },
  entry: {
    main: path.join(__ROOT, 'src/index.jsx'),
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
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};

module.exports = commonConfig;
