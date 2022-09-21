const { getFileName, loop, getRandomMinMax, delay } = require('./utils');

function rollDice(n = 6) {
  return getRandomMinMax(1, n);
}

delay(1900).then(() => console.log(rollDice()));
