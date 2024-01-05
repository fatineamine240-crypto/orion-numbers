import _ from 'lodash';
import { SORT_ORDER } from './constants';

export const calculateArithmeticOperation = (operand1, operator, operand2) => {
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
      result = operand1 / operand2;
      break;
    default:
      throw new Error(`Invalid operator: ${operator}`);
  }

  return result;
};

export const isAnswerCorrect = (operand1, operator, operand2, userAnswer) => {
  return (
    userAnswer === calculateArithmeticOperation(operand1, operator, operand2)
  );
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
    const question = `${multiplicand} * ${multiplier}`;
    const correctAnswer = multiplicand * multiplier;
    return { question, correctAnswer };
  });

  return multiplicationQuestions;
};
