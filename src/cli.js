import readlineSync from 'readline-sync';

const getName = (name) =>  {
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
};

export default getName;