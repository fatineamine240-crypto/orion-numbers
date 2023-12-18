import PropTypes from 'prop-types';
import { useState } from 'react';

export default function QuestionBox({
  currentQuestion,
  nextQuestion,
  submitAnswer,
}) {
  const [answer, setAnswer] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);

  const handleSubmit = () => {
    setIsAnswered(true);
    submitAnswer(Number(answer));
  };

  const handleNext = () => {
    setAnswer('');
    setIsAnswered(false);
    nextQuestion();
  };

  return (
    <div>
      <p>{currentQuestion.num1}</p>
      <p>{currentQuestion.operation}</p>
      <p>{currentQuestion.num2}</p>
      <input
        type="number"
        name="answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <button onClick={handleSubmit} disabled={isAnswered}>
        Submit
      </button>
      <button onClick={handleNext}>next</button>
    </div>
  );
}

QuestionBox.propTypes = {
  currentQuestion: PropTypes.object,
  nextQuestion: PropTypes.func,
  submitAnswer: PropTypes.func,
};
