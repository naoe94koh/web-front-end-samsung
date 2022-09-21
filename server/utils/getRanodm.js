const { throwError } = require('./throwError');

exports.getRandom = (n) => Math.round(Math.random() * n);

exports.getRandomMinMax = (min = 0, max = 10) => {
  if (min >= max) throwError('min 값이 max 보다 크거나 같습니다.');
  return exports.getRandom(max - min) + min;
};

// ES 모듈 이름 내보내기
// exports.getRandom = getRandom;
// exports.getRandomMinMax = getRandomMinMax;

// ES 모듈 기본 내보내기
// module.exports = {
//   getRandom,
//   getRandomMinMax,
// };
