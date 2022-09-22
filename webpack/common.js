const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const __ROOT = process.cwd();

let isProd = process.env.NODE_ENV?.includes('production');

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
    filename: '[name][contenthash].js',
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
          !isProd ? 'style-loader' : MiniCssExtractPlugin.loader,
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

  plugins: [new MiniCssExtractPlugin()].filter(Boolean),
};

module.exports = commonConfig;
