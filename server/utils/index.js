// 다시 내보내기
const randomModule = require('./getRanodm');
const errorModule = require('./throwError');
const loopModule = require('./loop');
const delayModule = require('./delay');

module.exports = {
  ...randomModule,
  ...errorModule,
  ...delayModule,
  ...loopModule,
};
