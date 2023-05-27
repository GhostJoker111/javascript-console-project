import { getRandom, getRandomRange, basicOfGames } from '../index.js';

const progressionGame = () => {
  const purposeOfProgressionGame = 'What number is missing in the progression?';

  const taskForProgressionGame = () => {
    const randomInitialNumber = getRandom(100);
    const randomStepNumber = getRandomRange(1, 10);
    const randomLengthFromRange = getRandomRange(5, 10);

    const progression = [];

    let nextNumber = randomInitialNumber + randomStepNumber;
    progression.push(randomInitialNumber, nextNumber);
    for (let i = 1; i < randomLengthFromRange - 1; i += 1) {
      nextNumber += randomStepNumber;
      progression.push(nextNumber);
    }

    const lastIndexOfProgression = progression.length - 1;
    const randomNumberFromArr = getRandomRange(0, lastIndexOfProgression);
    const removedNumber = progression[randomNumberFromArr];
    progression[randomNumberFromArr] = '..';

    const question = progression.join(' ');
    const result = removedNumber.toString();

    return [question, result];
  };
  basicOfGames(purposeOfProgressionGame, taskForProgressionGame);
};
export default progressionGame;
