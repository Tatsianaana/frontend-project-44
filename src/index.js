import readlineSync from 'readline-sync';

const rightAnswersCount = 3;

const playGame = (rules, getAnswer) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(rules);

  for (let i = 0; i < rightAnswersCount; i += 1) {
    const [randomInt, rightAnswer] = getAnswer();

    console.log(`Question: ${randomInt}`);

    const usersAnswer = readlineSync.question('Your answer: ');

    if (usersAnswer !== rightAnswer) {
      console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
