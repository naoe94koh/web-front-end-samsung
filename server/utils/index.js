// 다시 내보내기
const randomModule = require('./getRanodm');
const errorModule = require('./throwError');
const loopModule = require('./loop');
const delayModule = require('./delay');
const fileModule = require('./getFileName');

module.exports = {
  ...randomModule,
  ...errorModule,
  ...delayModule,
  ...loopModule,
  ...fileModule,
};
