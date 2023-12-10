import app from '../index.js';
import getRandomInt from '../half.js';

const MIN_INT_NUM = 1;
const MAX_INT_NUM = 10;
const SIZE_PROGRESSION = 10;
const RULES = 'What number is missing in the progression?';

const getProgression = (base, diff, size) => {
  const progression = [];
  for (let i = 0; i < size; i += 1) {
    const element = base + i * diff;
    progression.push(element);
  }
  return progression;
};

const getAnswer = () => {
  const base = getRandomInt(MIN_INT_NUM, MAX_INT_NUM);
  const diff = getRandomInt(MIN_INT_NUM, MAX_INT_NUM);
  const size = SIZE_PROGRESSION;

  const progression = getProgression(base, diff, size);
  const hiddenElement = getRandomInt(0, SIZE_PROGRESSION - 1);

  const rightAnswer = progression[hiddenElement];
  progression[hiddenElement] = '..';

  const question = progression.join(' ');

  return [question, String(rightAnswer)];
};

const runGame = () => app(RULES, getAnswer);

export default runGame;
