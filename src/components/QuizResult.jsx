import PropTypes from 'prop-types';
import Container from './Container';
import { useEffect, useState } from 'react';

export default function QuizResult({ result, total }) {
  const [grade, setGrade] = useState('Keep practicing');

  useEffect(() => {
    const percentage = (result / total) * 100;

    if (percentage > 95) setGrade('Splendid');
    else if (percentage > 85) setGrade('Excellent');
    else if (percentage > 70) setGrade('Great job');
    else if (percentage > 60) setGrade('Good');
  }, [result, total]);

  return (
    <Container className="bg-white space-y-4">
      <p className="text-lg">
        You&apos;ve got {result} / {total}
      </p>
      <h2 className="text-3xl font-bold text-primary">{grade}!</h2>
    </Container>
  );
}

QuizResult.propTypes = {
  result: PropTypes.number,
  total: PropTypes.number,
};
