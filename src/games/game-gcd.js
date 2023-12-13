import app from '../index.js';
import getRandomInt from '../utils.js';

const MIN_INT_NUM = 0;
const MAX_INT_NUM = 100;
const RULES = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  if (b > a) {
    return getGCD(b, a);
  }
  if (!b) {
    return a;
  }
  return getGCD(b, a % b);
};

const getAnswer = () => {
  const a = getRandomInt(MIN_INT_NUM, MAX_INT_NUM);
  const b = getRandomInt(MIN_INT_NUM, MAX_INT_NUM);

  const rightAnswer = getGCD(a, b);
  const question = `${a} ${b}`;

  return [question, String(rightAnswer)];
};

const brainGCD = () => app(RULES, getAnswer);

export default brainGCD;
