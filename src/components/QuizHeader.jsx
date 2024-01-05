import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

export default function QuizHeader({
  counter,
  correctAnswers,
  totalQuestions,
}) {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation('global');

  return (
    <div className="flex justify-between px-3 mb-2">
      <p>
        <span className="text-sm">{t('math.correctAnswers')}: </span>
        {correctAnswers}
      </p>
      <p>
        <span className="text-sm">{t('math.question')}: </span>
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
