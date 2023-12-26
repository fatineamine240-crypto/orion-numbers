import PropTypes from 'prop-types';
import Container from './Container';

export default function QuizResult({ total, result }) {
  return (
    <Container>
      <p>{result}</p>
      <p>{total}</p>
    </Container>
  );
}

QuizResult.propTypes = {
  total: PropTypes.number,
  result: PropTypes.number,
};
