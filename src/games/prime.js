const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

// Функция проверки на простое число (предикат)
const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

export const generateRound = () => {
  const number = getRandomNumber();
  const question = number.toString();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  
  return { question, correctAnswer };
};

export const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
