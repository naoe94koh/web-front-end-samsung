// ES 모듈 이름 내보내기
exports.loop = (callback, repeatCount = 10) => {
  Array(repeatCount).fill(null).forEach(callback);
};
