const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (start, step, length, hiddenIndex) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    const currentElement = start + i * step;
    progression.push(currentElement);
  }
  
  const hiddenValue = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  
  return { progression, hiddenValue };
};

export const generateRound = () => {
  const minLength = 5;
  const maxLength = 10;
  const length = getRandomNumber(minLength, maxLength);
  const start = getRandomNumber(1, 50);
  const step = getRandomNumber(1, 10);
  const hiddenIndex = getRandomNumber(0, length - 1);
  
  const { progression, hiddenValue } = generateProgression(start, step, length, hiddenIndex);
  
  const question = progression.join(' ');
  const correctAnswer = hiddenValue.toString();
  
  return { question, correctAnswer };
};

export const gameDescription = 'What number is missing in the progression?';
