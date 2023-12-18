import PropTypes from 'prop-types';

export default function QuizHeader({
  counter,
  correctAnswers,
  totalQuestions,
}) {
  return (
    <div>
      <p>
        Question #{counter} of {totalQuestions} Questions
      </p>
      <p>Correct Answers: {correctAnswers}</p>
    </div>
  );
}

QuizHeader.propTypes = {
  counter: PropTypes.number,
  correctAnswers: PropTypes.number,
  totalQuestions: PropTypes.number,
};
