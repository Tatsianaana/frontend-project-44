import app from '../index.js';
import getRandomInt from '../utils.js';

const MIN_INT_NUM = 1;
const MAX_INT_NUM = 20;
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
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const getAnswer = () => {
  const operand1 = getRandomInt(MIN_INT_NUM, MAX_INT_NUM);
  const operand2 = getRandomInt(MIN_INT_NUM, MAX_INT_NUM);
  const operator = OPERATORS[getRandomInt(0, OPERATORS.length - 1)];

  const rightAnswer = getMathExpression(operand1, operand2, operator);
  const question = `${operand1} ${operator} ${operand2}`;

  return [question, String(rightAnswer)];
};

const brainCalc = () => app(RULES, getAnswer);

export default brainCalc;
