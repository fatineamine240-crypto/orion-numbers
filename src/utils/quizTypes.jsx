import { MultiplicationTables } from '../components/QuizTypes';
import { SORT_ORDER } from './constants';

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
    type: 'multiplication',
    props: {
      table: 6,
      order: [SORT_ORDER['ASC'], SORT_ORDER['DESC'], SORT_ORDER['RANDOM']],
    },
  },
];
