import readlineSync from 'readline-sync';

const getRandomInt = (max) => Math.floor(Math.random() * max);

const isEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = () => readlineSync.question('May I have your name? ');
  console.log(`Hello there, ${userName}!`);
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomInt(100);
    console.log('Question:', randomNumber);
    const answer = readlineSync.question('Your answer: ');

    const checkForYes = randomNumber % 2 === 0 && answer === 'yes';
    const checkForNo = randomNumber % 2 !== 0 && answer === 'no';

    if (checkForYes || checkForNo) {
      console.log('Correct!');
    } else {
      const opposite = answer === 'yes' ? 'no' : 'yes';
      const errorMessage = `'${answer}' is wrong answer ;(. Correct answer was '${opposite}'.\nLet's try again, ${userName}!`;
      return console.log(errorMessage);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default isEven;
