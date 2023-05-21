import readlineSync from 'readline-sync';

export const getRandomNumber = (max) => Math.round(Math.random() * max);

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello there, ${name}!`);
  return name;
};

export default readlineSync;
