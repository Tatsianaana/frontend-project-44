import app from '../index.js';
import getRandomInt from '../half.js';

const RULES = 'Answer "yes" if the number is even, otherwise answer "no".';

const getAnswer = () => {
  const randomInt = getRandomInt(2, 20);
  const rightAnswer = randomInt % 2 === 0 ? 'yes' : 'no';
  return [String(randomInt), rightAnswer];
};

const runGame = () => app(RULES, getAnswer);

export default runGame;
