import app from '../index.js';
import getRandomInt from '../utils.js';

const MIN_INT_NUM = 1;
const MAX_INT_NUM = 20;
const RULES = 'Answer "yes" if the number is even, otherwise answer "no".';

const getAnswer = () => {
  const randomInt = getRandomInt(MIN_INT_NUM, MAX_INT_NUM);
  const rightAnswer = randomInt % 2 === 0 ? 'yes' : 'no';
  return [String(randomInt), rightAnswer];
};

const runGame = () => app(RULES, getAnswer);

export default runGame;
