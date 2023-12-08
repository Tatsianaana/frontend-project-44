import launchGame from '../index.js';

const getRandomInt = (min, max) => {
  const minIntNum = Math.ceil(min);
  const maxIntNum = Math.floor(max);
  return Math.floor(Math.random() * (maxIntNum - minIntNum + 1)) + minIntNum;
};
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getAnswer = () => {
  const randomInt = getRandomInt(2, 20);
  const rightAnswer = randomInt % 2 === 0 ? 'yes' : 'no';
  return [String(randomInt), rightAnswer];
};

const runGame = () => launchGame(rules, getAnswer);

export default runGame;
