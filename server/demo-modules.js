const { getFileName, loop, getRandomMinMax, delay } = require('./utils');

function rollDice(n = 6) {
  return getRandomMinMax(1, n);
}

loop(() => delay().then(() => console.log(rollDice())));
