export const getRandom = (n) => Math.round(Math.random() * n);

export const getRandomMinMax = (min = 0, max = 10) => {
  if (min >= max) return;
  return getRandom(max - min) + min;
};
