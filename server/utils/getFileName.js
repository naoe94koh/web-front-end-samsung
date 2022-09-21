const path = require('path');

exports.getFileName = (filePath) => {
  return path.basename(filePath, path.extname(filePath));
};
