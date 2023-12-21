import { useState } from 'react';
import { QuestionBox, QuizHeader } from '../components';
import { useLoaderData } from 'react-router-dom';

export const loader = () => {
  // let urlParams = new URL(document.location).searchParams;
  const urlParams = new URLSearchParams(window.location.search);
  // console.log(urlParams.has('table'));
  // console.log(urlParams.get('table'));
  console.log(urlParams.get('type'));

  const questions = [
    {
      num1: 2,
      num2: 1,
      operation: 'x',
      answer: 2,
    },
    {
      num1: 2,
      num2: 2,
      operation: 'x',
      answer: 4,
    },
    {
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
    <>
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
    </>
  );
}
