import { useEffect, useState } from 'react';
import { QuestionBox, QuizHeader } from '../components';
import { getQuizQuestions, quizTypes } from '../utils/quizTypes';

export default function Quiz() {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [WrongAnswersIndexes, setWrongAnswersIndexes] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [questionHeading, setQuestionHeading] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const quizType = urlParams.get('type');

    const quizProps = quizTypes.find((type) => type.name === quizType);

    if (!quizProps) {
      throw new Error('Invalid quiz');
    }

    let props = {};
    quizProps['props'].forEach((prop) => {
      props = { ...props, [prop]: urlParams.get(prop) };
    });

    const quiz = getQuizQuestions(quizType, props);
    setQuestionHeading(quiz.heading);

    setQuestions(quiz.questions);
  }, []);

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log('end');
    }
  };

  const submitAnswer = (answer) => {
    if (answer !== questions[currentQuestionIndex]['correctAnswer']) {
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
        heading={questionHeading}
        currentQuestion={questions[currentQuestionIndex]?.question}
        nextQuestion={nextQuestion}
        submitAnswer={submitAnswer}
      />
    </>
  );
}
