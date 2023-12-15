import playGame from '../index.js';
import getRandomInt from '../utils.js';

const MIN_INT_NUM = 1;
const MAX_INT_NUM = 20;
const RULES = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getAnswer = () => {
  const question = getRandomInt(MIN_INT_NUM, MAX_INT_NUM);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [String(question), rightAnswer];
};

const runGameEven = () => playGame(RULES, getAnswer);

export default runGameEven;
