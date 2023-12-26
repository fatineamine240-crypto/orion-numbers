import PropTypes from 'prop-types';

export default function QuizHeader({
  counter,
  correctAnswers,
  totalQuestions,
}) {
  return (
    <div className="flex justify-between px-3 mb-2">
      <p>
        <span className="text-sm">Correct Answers: </span>
        {correctAnswers}
      </p>
      <p>
        <span className="text-sm">Question: </span>
        {counter} / {totalQuestions}
      </p>
    </div>
  );
}

QuizHeader.propTypes = {
  counter: PropTypes.number,
  correctAnswers: PropTypes.number,
  totalQuestions: PropTypes.number,
};
