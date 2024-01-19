import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Container, Confetti } from '.';

export default function QuizResult({ result, total }) {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation('global');
  const navigate = useNavigate();
  const [grade, setGrade] = useState(t('result.keepPracticing'));
  const [quizTypeUrl, setQuizTypeUrl] = useState('/');

  useEffect(() => {
    const percentage = (result / total) * 100;

    if (percentage === 100) setGrade(t('result.perfect'));
    else if (percentage >= 90) setGrade(t('result.excellent'));
    else if (percentage >= 80) setGrade(t('result.greatJob'));
    else if (percentage > 50) setGrade(t('result.goodEffort'));

    const urlParams = new URLSearchParams(window.location.search);
    setQuizTypeUrl('/?type=' + urlParams.get('type'));
  }, [result, total, t]);

  return (
    <Container className="space-y-4">
      <h2 className="text-3xl font-bold text-teal-500">{grade}</h2>

      <p className="text-lg">
        {`${t('result.youHaveGot')} ${result} ${t('result.outOf')} ${total}`}
      </p>

      <Button
        text={t('math.getAnotherQuiz')}
        onClick={() => navigate(quizTypeUrl)}
      />

      {grade !== t('result.keepPracticing') && (
        <Confetti percentage={(result / total) * 100} />
      )}
    </Container>
  );
}

QuizResult.propTypes = {
  result: PropTypes.number,
  total: PropTypes.number,
};
