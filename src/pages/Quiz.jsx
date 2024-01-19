import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { QuestionBox, QuizHeader, QuizResult } from '../components';
import { getQuizQuestions, quizTypes } from '../utils/quizTypes';

export default function Quiz() {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation('global');
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [WrongAnswersIndexes, setWrongAnswersIndexes] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [questionHeading, setQuestionHeading] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

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
    setQuestionHeading(t(`math.${quiz.heading}`));

    setQuestions(quiz.questions);
  }, [t]);

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const submitAnswer = (answer) => {
    if (answer !== questions[currentQuestionIndex]['correctAnswer']) {
      setWrongAnswersIndexes([...WrongAnswersIndexes, currentQuestionIndex]);
    } else {
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  console.log(questions);
  return (
    <>
      {!isCompleted ? (
        <>
          <QuizHeader
            counter={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            correctAnswers={correctAnswers}
          />

          <QuestionBox
            heading={questionHeading}
            currentQuestion={questions[currentQuestionIndex]?.question}
            currentQuestionAnswer={
              questions[currentQuestionIndex]?.correctAnswer
            }
            nextQuestion={nextQuestion}
            submitAnswer={submitAnswer}
          />
        </>
      ) : (
        <QuizResult total={questions.length} result={correctAnswers} />
      )}
    </>
  );
}
