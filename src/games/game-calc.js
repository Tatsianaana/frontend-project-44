import app from '../index.js';
import getRandomInt from '../half.js';

const RULES = 'What is the result of the expression?';
const OPERATORS = ['+', '-', '*'];

const getMathExpression = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      return null;
  }
};

const getAnswer = () => {
  const operand1 = getRandomInt(1, 20);
  const operand2 = getRandomInt(1, 20);
  const operator = OPERATORS[getRandomInt(0, OPERATORS.length - 1)];

  const rightAnswer = getMathExpression(operand1, operand2, operator);
  const question = `${operand1} ${operator} ${operand2}`;

  return [question, String(rightAnswer)];
};

const runGame = () => app(RULES, getAnswer);

export default runGame;
