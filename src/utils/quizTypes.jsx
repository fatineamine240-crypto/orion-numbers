import { MultiplicationTables } from '../components/QuizTypes';
import { generateMultiplicationQuestions } from './math';

export const quizComponents = [
  {
    name: 'multiplicationTables',
    component: <MultiplicationTables />,
  },
  {
    name: 'calculations',
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
      return {
        questions: generateMultiplicationQuestions(
          Number(props.table),
          props.order
        ),
        heading: 'multiply',
      };
    default:
      throw new Error(`Invalid quiz type: ${quiz}`);
  }
};
