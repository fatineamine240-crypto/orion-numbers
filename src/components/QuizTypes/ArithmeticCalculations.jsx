import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Form, RadioGroup, Select } from '../Form';
import { Button } from '..';
import { DIFFICULTY_OPTIONS } from '../../utils/constants';

export default function ArithmeticCalculations() {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation('global');
  const navigate = useNavigate();

  const operationTypeOptions = [
    'addition',
    'subtraction',
    'multiplication',
    'division',
  ];

  const [operationType, setOperationType] = useState(operationTypeOptions[0]);
  const [difficulty, setDifficulty] = useState(DIFFICULTY_OPTIONS['SIMPLE']);
  const [questionNumbers, setQuestionNumbers] = useState('5');

  const handleSubmit = (e) => {
    e.preventDefault();

    const numberOfQuestions = Number(questionNumbers);

    if (
      typeof numberOfQuestions !== 'number' ||
      numberOfQuestions < 1 ||
      numberOfQuestions > 10 ||
      !operationTypeOptions.includes(operationType) ||
      !Object.values(DIFFICULTY_OPTIONS).includes(difficulty)
    ) {
      throw new Error('Invalid inputs');
    }

    return navigate(
      `/quiz?type=arithmetic&operation=${operationType}&difficulty=${difficulty}&numberOfQuestions=${numberOfQuestions}`
    );
  };

  return (
    <Form>
      <RadioGroup
        labelText={t('math.arithmeticOperation')}
        name="operationType"
        options={[
          {
            value: operationTypeOptions[0],
            label: t(`math.${operationTypeOptions[0]}`),
          },
          {
            value: operationTypeOptions[1],
            label: t(`math.${operationTypeOptions[1]}`),
          },
          {
            value: operationTypeOptions[2],
            label: t(`math.${operationTypeOptions[2]}`),
          },
          {
            value: operationTypeOptions[3],
            label: t(`math.${operationTypeOptions[3]}`),
          },
        ]}
        onChange={(e) => setOperationType(e.target.value)}
      />

      <RadioGroup
        labelText={t('math.difficultyLevel')}
        name="difficulty"
        options={[
          {
            value: DIFFICULTY_OPTIONS['SIMPLE'],
            label: t(`math.${DIFFICULTY_OPTIONS['SIMPLE']}`),
          },
          {
            value: DIFFICULTY_OPTIONS['INTERMEDIATE'],
            label: t(`math.${DIFFICULTY_OPTIONS['INTERMEDIATE']}`),
          },
          {
            value: DIFFICULTY_OPTIONS['CHALLENGING'],
            label: t(`math.${DIFFICULTY_OPTIONS['CHALLENGING']}`),
          },
        ]}
        checked={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      />

      <Select
        labelText={t('math.numberOfQuestions')}
        name="questionsNumber"
        options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        defaultValue={questionNumbers}
        onChange={(e) => setQuestionNumbers(e.target.value)}
      />

      <div className="mt-6">
        <Button
          type="submit"
          text={t('math.startQuiz')}
          onClick={handleSubmit}
        />
      </div>
    </Form>
  );
}
