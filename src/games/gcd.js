const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const gcd = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

export const generateRound = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  
  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2).toString();
  
  return { question, correctAnswer };
};

export const gameDescription = 'Find the greatest common divisor of given numbers.';
