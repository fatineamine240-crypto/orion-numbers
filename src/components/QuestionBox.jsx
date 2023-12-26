import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form, Input } from './Form';
import { Button } from '.';

export default function QuestionBox({
  heading,
  currentQuestion,
  nextQuestion,
  submitAnswer,
}) {
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
    <div className="block rounded-lg border-2 text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <div className="capitalize px-6 py-5 border-b-2">{heading}</div>
      <div>
        <h5 className="mb-2 pt-5 text-xl font-medium leading-tight">
          {currentQuestion} =
        </h5>
        <Form onSubmit={handleSubmit}>
          <div className="flex justify-center items-center gap-4">
            <Input
              type="number"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>

          <div className="py-5 !mt-5 border-t-2">
            <Button
              type="submit"
              text={!isAnswered ? 'Check Answer' : 'Answered'}
              primary={!isAnswered}
              disabled={isAnswered}
            />
          </div>
        </Form>
      </div>
    </div>
  );
}

QuestionBox.propTypes = {
  heading: PropTypes.string,
  currentQuestion: PropTypes.string,
  nextQuestion: PropTypes.func,
  submitAnswer: PropTypes.func,
};
