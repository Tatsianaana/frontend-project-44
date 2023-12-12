import app from '../index.js';
import getRandomInt from '../utils.js';

const MIN_INT_NUM = 1;
const MAX_INT_NUM = 100;
const RULES = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  let divider = 2;
  while (divider <= number / 2) {
    if (number % divider === 0) {
      return false;
    }
    divider += 1;
  }
  return true;
};

const getAnswer = () => {
  const question = getRandomInt(MIN_INT_NUM, MAX_INT_NUM);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';

  return [String(question), rightAnswer];
};

const runGame = () => app(RULES, getAnswer);

export default runGame;
