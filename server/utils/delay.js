exports.delay = (timeout = 1000, shouldReject = false) => {
  console.time('delay');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldReject) {
        // console.timeLog('delay');
        resolve();
      } else {
        reject({ message: '알 수 없는 오류가 발생했습니다.' });
      }
      console.timeEnd('delay');
    }, timeout);
  });
};
