import { useState } from 'react';
import { QuestionBox, QuizHeader } from '../components';
import { useLoaderData } from 'react-router-dom';

export const loader = ({ params }) => {
  console.log(params);
  const questions = [
    {
      type: 'calculate',
      num1: 2,
      num2: 1,
      operation: 'x',
      answer: 2,
    },
    {
      type: 'calculate',
      num1: 2,
      num2: 2,
      operation: 'x',
      answer: 4,
    },
    {
      type: 'calculate',
      num1: 2,
      num2: 3,
      operation: 'x',
      answer: 6,
    },
  ];

  return { questions };
};

export default function Quiz() {
  const { questions } = useLoaderData();
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [WrongAnswersIndexes, setWrongAnswersIndexes] = useState([]);

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log('end');
    }
  };

  const submitAnswer = (answer) => {
    if (answer !== questions[currentQuestionIndex]['answer']) {
      setWrongAnswersIndexes([...WrongAnswersIndexes, currentQuestionIndex]);
    } else {
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  return (
    <main>
      <QuizHeader
        counter={currentQuestionIndex + 1}
        totalQuestions={questions.length}
        correctAnswers={correctAnswers}
      />
      <QuestionBox
        currentQuestion={questions[currentQuestionIndex]}
        nextQuestion={nextQuestion}
        submitAnswer={submitAnswer}
      />
    </main>
  );
}
