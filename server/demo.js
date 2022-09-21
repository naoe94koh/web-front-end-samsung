// const { loop } = require('./utils/loop');
// const { delay } = require('./utils/delay');
// const { getRandomMinMax } = require('./utils/getRanodm');

const { loop, getRandomMinMax, delay } = require('./utils');

function rollDice(n = 6) {
  return getRandomMinMax(1, n);
}

loop(() => {
  console.log(rollDice(8));
});

// delay().then() => console.log(rollDice());
// delay(2000).then() => console.log(rollDice(16));
