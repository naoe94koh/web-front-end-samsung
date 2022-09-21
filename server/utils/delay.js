exports.delay = (timeout = 1000, shouldReject = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldReject) {
        resolve();
      } else {
        reject({ message: '알 수 없는 오류가 발생했습니다.' });
      }
    }, timeout);
  });
};
