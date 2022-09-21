const path = require('path');
const { getFileName, loop, getRandomMinMax, delay } = require('./utils');

let filePath = '../client/src/scss/components/_banner.scss';
// console.log(getFileName(filePath));

let logoPath = path.join('client', 'public', 'assets', 'logo.svg');
console.log(logoPath);

logoPath = path.resolve('client', 'public', 'assets', 'logo.svg');
console.log(logoPath);

logoPath = path.join(__dirname, 'client', 'public', 'assets', 'logo.svg');
console.log(logoPath);

logoPath = path.join(process.cwd(), 'client', 'public', 'assets', 'logo.svg');
console.log(logoPath);

function rollDice(n = 6) {
  return getRandomMinMax(1, n);
}
