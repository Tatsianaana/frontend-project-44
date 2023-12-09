import app from '../index.js';
import getRandomInt from '../half.js';

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
  const a = getRandomInt(0, 100);
  const b = getRandomInt(0, 100);

  const rightAnswer = getGCD(a, b);
  const question = `${a} ${b}`;

  return [question, String(rightAnswer)];
};

const runGame = () => app(RULES, getAnswer);

export default runGame;
