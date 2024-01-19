import {
  MultiplicationTables,
  ArithmeticCalculations,
} from '../components/QuizTypes';
import {
  generateArithmeticQuestions,
  generateMultiplicationQuestions,
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
    name: 'multiplication',
    props: ['table', 'order'],
  },
  {
    name: 'arithmetic',
    props: ['operation', 'difficulty', 'numberOfQuestions'],
  },
];

export const getQuizQuestions = (quiz, props) => {
  switch (quiz) {
    case 'multiplication':
      return {
        questions: generateMultiplicationQuestions(
          Number(props.table),
          props.order
        ),
        heading: 'multiply',
      };
    case 'arithmetic':
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
