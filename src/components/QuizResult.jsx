import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Container, Confetti } from '.';
import perfectSoundFile from '../assets/sound/perfect.mp3';

export default function QuizResult({ result, total }) {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation('global');
  const navigate = useNavigate();
  const [grade, setGrade] = useState('keepPracticing');
  const [quizTypeUrl, setQuizTypeUrl] = useState('/');
  const audioRef = useRef(null);

  useEffect(() => {
    const percentage = (result / total) * 100;

    if (percentage === 100) {
      setGrade('perfect');
      audioRef.current.play();
    } else if (percentage >= 90) setGrade('excellent');
    else if (percentage >= 80) setGrade('greatJob');
    else if (percentage > 50) setGrade('goodEffort');

    const urlParams = new URLSearchParams(window.location.search);
    setQuizTypeUrl('/?type=' + urlParams.get('type'));
  }, [result, total]);

  return (
    <Container className="space-y-4">
      <h2 className="text-3xl font-bold text-teal-500">
        {t(`result.${grade}`)}
      </h2>

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

      <audio ref={audioRef} src={perfectSoundFile} />
    </Container>
  );
}

QuizResult.propTypes = {
  result: PropTypes.number,
  total: PropTypes.number,
};
