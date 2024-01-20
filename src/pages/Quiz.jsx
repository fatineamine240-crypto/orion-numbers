import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { QuestionBox, QuizHeader, QuizResult } from '../components';
import { getQuizQuestions, quizTypes } from '../utils/quizTypes';
import correctAudioFile from '../assets/sound/correct.mp3';
import wrongAudioFile from '../assets/sound/wrong.mp3';
import perfectAudioFile from '../assets/sound/yay.mp3';
import clapsAudioFile from '../assets/sound/claps.mp3';

export default function Quiz() {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation('global');

  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [WrongAnswersIndexes, setWrongAnswersIndexes] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [questionHeading, setQuestionHeading] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  const correctAudioRef = useRef(null);
  const wrongAudioRef = useRef(null);
  const perfectAudioRef = useRef(null);
  const clapsAudioRef = useRef(null);

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
      clapsAudioRef.current.play();
    }
  };

  const submitAnswer = (answer) => {
    if (answer !== questions[currentQuestionIndex]['correctAnswer']) {
      setWrongAnswersIndexes([...WrongAnswersIndexes, currentQuestionIndex]);
      wrongAudioRef.current.pause();
      wrongAudioRef.current.currentTime = 0;
      wrongAudioRef.current.play();
    } else {
      setCorrectAnswers((prevCorrectAnswers) => {
        const correctAnswers = prevCorrectAnswers + 1;

        if (correctAnswers === questions.length) {
          perfectAudioRef.current.play();
        } else {
          correctAudioRef.current.pause();
          correctAudioRef.current.currentTime = 0;
          correctAudioRef.current.play();
        }

        return correctAnswers;
      });
    }
  };

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

      <audio ref={correctAudioRef} src={correctAudioFile} />
      <audio ref={wrongAudioRef} src={wrongAudioFile} />
      <audio ref={perfectAudioRef} src={perfectAudioFile} />
      <audio ref={clapsAudioRef} src={clapsAudioFile} />
    </>
  );
}
