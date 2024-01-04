import PropTypes from 'prop-types';
import Container from './Container';
import { useEffect, useState } from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

export default function QuizResult({ result, total }) {
  const navigate = useNavigate();
  const [grade, setGrade] = useState('Keep practicing!');

  useEffect(() => {
    const percentage = (result / total) * 100;

    if (percentage === 100) setGrade('Perfect! You nailed it!');
    else if (percentage >= 90) setGrade('Excellent! Almost perfect!');
    else if (percentage > 80) setGrade('Great job! You are doing well!');
    else if (percentage > 60) setGrade('Good effort! Keep it up!!');
  }, [result, total]);

  return (
    <Container className="space-y-4">
      <h2 className="text-3xl font-bold text-teal-500">{grade}</h2>

      <p className="text-lg">
        You have got {result} out of {total}
      </p>

      <Button text="Get Another Quiz" onClick={() => navigate('/')} />
    </Container>
  );
}

QuizResult.propTypes = {
  result: PropTypes.number,
  total: PropTypes.number,
};
