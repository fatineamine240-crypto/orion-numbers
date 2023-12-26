import { MultiplicationTables } from '../components/QuizTypes';
import { generateMultiplicationQuestions } from './math';

export const quizComponents = [
  {
    name: 'Multiplication Tables',
    component: <MultiplicationTables />,
  },
  {
    name: 'Calculations',
  },
];

export const quizTypes = [
  {
    name: 'multiplication',
    props: ['table', 'order'],
  },
];

export const getQuizQuestions = (quiz, props) => {
  switch (quiz) {
    case 'multiplication':
      return generateMultiplicationQuestions(Number(props.table), props.order);
    default:
      throw new Error(`Invalid quiz type: ${quiz}`);
  }
};
