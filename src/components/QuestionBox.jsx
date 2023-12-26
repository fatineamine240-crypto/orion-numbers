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
    <div className="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div className="capitalize border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
        {heading}
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
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

          <hr className="border-gray-200 dark:border-gray-700 -mx-6" />

          <div className="mt-6">
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
