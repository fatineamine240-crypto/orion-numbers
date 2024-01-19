import {
  MultiplicationTables,
  ArithmeticCalculations,
} from '../components/QuizTypes';
import {
  generateMultiplicationQuestions,
  generateArithmeticQuestions,
} from './math';

export const quizComponents = [
  {
    name: 'multiplicationTables',
    component: <MultiplicationTables />,
  },
  {
    name: 'arithmeticCalculations',
    component: <ArithmeticCalculations />,
  },
];

export const quizTypes = [
  {
    name: 'multiplicationTables',
    props: ['table', 'order'],
  },
  {
    name: 'arithmeticCalculations',
    props: ['operation', 'difficulty', 'numberOfQuestions'],
  },
];

export const getQuizQuestions = (quiz, props) => {
  switch (quiz) {
    case 'multiplicationTables':
      return {
        questions: generateMultiplicationQuestions(
          Number(props.table),
          props.order
        ),
        heading: 'multiply',
      };
    case 'arithmeticCalculations':
      return {
        questions: generateArithmeticQuestions(
          props.operation,
          props.difficulty,
          Number(props.numberOfQuestions)
        ),
        heading: 'calculate',
      };
    default:
      throw new Error(`Invalid quiz type: ${quiz}`);
  }
};
