import _ from 'lodash';
import { DIFFICULTY_OPTIONS, SORT_ORDER } from './constants';

// const isAnswerCorrect = (operand1, operator, operand2, userAnswer) => {
//   return (
//     userAnswer === calculateArithmeticOperation(operand1, operator, operand2)
//   );
// };

const generateRandomNumber = (numDigits) => {
  if (numDigits < 1) {
    throw new Error('Number of digits must be greater than or equal to 1');
  }

  const min = Math.pow(10, numDigits - 1);
  const max = Math.pow(10, numDigits) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const arithmeticOperations = {
  addition: '+',
  subtraction: '-',
  multiplication: 'x',
  division: '÷',
};

const calculateArithmeticOperation = (operand1, operator, operand2) => {
  let result;

  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
    case 'x':
      result = operand1 * operand2;
      break;
    case '/':
    case '÷':
      result = operand1 / operand2;
      break;
    default:
      throw new Error(`Invalid operator: ${operator}`);
  }

  return result;
};

export const generateMultiplicationQuestions = (
  multiplicand,
  order = SORT_ORDER.ASC
) => {
  if (
    typeof multiplicand !== 'number' ||
    multiplicand <= 0 ||
    !Object.values(SORT_ORDER).includes(order)
  ) {
    throw new Error('Multiplicand must be a number larger than 0');
  }

  let multipliers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (order === SORT_ORDER.DESC) {
    multipliers = multipliers.reverse();
  } else if (order === SORT_ORDER.RANDOM) {
    multipliers = _.shuffle(multipliers);
  }

  const multiplicationQuestions = multipliers.map((multiplier) => {
    const question = `${multiplicand} x ${multiplier}`;
    const correctAnswer = multiplicand * multiplier;
    return { question, correctAnswer };
  });

  return multiplicationQuestions;
};

export const generateArithmeticQuestions = (
  operator,
  difficulty,
  numOfQuestions
) => {
  const questions = [];

  let numDigits1;
  let numDigits2;

  switch (difficulty) {
    case DIFFICULTY_OPTIONS['CHALLENGING']:
      if (operator === 'division') {
        numDigits1 = 2;
        numDigits2 = 3;
      } else {
        numDigits1 = 4;
        numDigits2 = 3;
      }
      break;

    case DIFFICULTY_OPTIONS['INTERMEDIATE']:
      if (operator === 'multiplication' || operator === 'division') {
        numDigits1 = 2;
        numDigits2 = 2;
      } else {
        numDigits1 = 3;
        numDigits2 = 2;
      }
      break;

    default:
      numDigits1 = 2;
      numDigits2 = 1;
  }

  for (let i = 0; i < numOfQuestions; i++) {
    let operand1;
    let operand2;

    if (operator === 'division') {
      operand2 = generateRandomNumber(numDigits2);
      operand1 = operand2 * generateRandomNumber(numDigits1);
    } else {
      operand1 = generateRandomNumber(numDigits1);
      operand2 = generateRandomNumber(numDigits2);
    }

    const question = `${operand1} ${arithmeticOperations[operator]} ${operand2}`;

    const correctAnswer = calculateArithmeticOperation(
      operand1,
      arithmeticOperations[operator],
      operand2
    );

    questions.push({ question, correctAnswer });
  }

  return questions;
};
