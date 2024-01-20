import PropTypes from 'prop-types';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Input } from './Form';
import { Button, Container } from '.';

export default function QuestionBox({
  heading,
  currentQuestion,
  currentQuestionAnswer,
  nextQuestion,
  submitAnswer,
}) {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation('global');
  const [answer, setAnswer] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.trim() === '') return;

    setIsAnswered(true);
    submitAnswer(Number(answer.trim()));

    setTimeout(() => {
      setAnswer('');
      setIsAnswered(false);
      nextQuestion();
    }, 500);
  };

  return (
    <Container>
      <div className="capitalize pb-5 border-b-2">{heading}</div>

      <div>
        <h5 className="mb-2 pt-5 text-xl font-medium leading-tight">
          <span>{currentQuestion?.replace('x', '\u00D7')} =</span>
        </h5>
        <Form onSubmit={handleSubmit}>
          <div className="flex justify-center items-center gap-4 min-h-[40px]">
            {!isAnswered ? (
              <Input
                type="number"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                autoFocus
                hideLabel
              />
            ) : (
              <p
                className={`font-medium text-xl ${
                  Number(answer) === currentQuestionAnswer
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                {currentQuestionAnswer}
              </p>
            )}
          </div>

          <div className="pt-5 !mt-5 border-t-2">
            <Button
              type="submit"
              text={!isAnswered ? t('math.checkAnswer') : t('math.answered')}
              primary={!isAnswered}
              disabled={isAnswered}
            />
          </div>
        </Form>
      </div>
    </Container>
  );
}

QuestionBox.propTypes = {
  heading: PropTypes.string,
  currentQuestion: PropTypes.string,
  currentQuestionAnswer: PropTypes.number,
  nextQuestion: PropTypes.func,
  submitAnswer: PropTypes.func,
};
