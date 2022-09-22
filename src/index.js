import { getRandomMinMax } from './utils';

function rollDice(n = 6) {
  return getRandomMinMax(1, n);
}

const h1 = document.createElement('h1');

h1.textContent = rollDice().toString();

document.getElementById('root').append(h1);
