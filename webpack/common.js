const path = require('path');
const __ROOT = process.cwd();

const commonConfig = {
  target: ['web'],
  entry: {
    main: path.join(__ROOT, 'src/index.js'),
  },
  output: {
    path: path.join(__ROOT, 'public'),
    filename: '[name].js',
  },
};

module.exports = commonConfig;
