import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Form, Input, RadioGroup, Select } from '../Form';
import { Button } from '..';

export default function TimesTable() {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation('global');
  const navigate = useNavigate();

  const defaultTable = '6';
  const OrderOptions = ['ascending', 'descending', 'random'];

  const [selectedOption, setSelectedOption] = useState(defaultTable);

  const [selectedTable, setSelectedTable] = useState(defaultTable);
  const [questionOrder, setQuestionOrder] = useState(OrderOptions[0]);

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);

    setSelectedTable(
      Number.isInteger(Number(selectedValue)) ? selectedValue : '11'
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const multiplicand = Number(selectedTable);

    if (
      typeof multiplicand !== 'number' ||
      multiplicand <= 0 ||
      !OrderOptions.includes(questionOrder)
    ) {
      throw new Error('Multiplicand must be a number larger than 0');
    }

    return navigate(
      `/quiz?type=multiplication&table=${multiplicand}&order=${questionOrder}`
    );
  };

  return (
    <Form>
      <Select
        labelText={t('math.table')}
        name="table"
        options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, t('math.custom')]}
        defaultValue={selectedOption}
        onChange={handleSelectChange}
      />

      {selectedOption === t('math.custom') && (
        <Input
          type="number"
          name="tableNumber"
          labelText={t('math.tableNumber')}
          value={selectedTable}
          onChange={(e) => setSelectedTable(e.target.value)}
        />
      )}

      <RadioGroup
        labelText={t('math.questionOrder')}
        name="order"
        options={[
          {
            value: OrderOptions[0],
            label: t(`math.${OrderOptions[0]}`),
          },
          {
            value: OrderOptions[1],
            label: t(`math.${OrderOptions[1]}`),
          },
          {
            value: OrderOptions[2],
            label: t(`math.${OrderOptions[2]}`),
          },
        ]}
        onChange={(e) => setQuestionOrder(e.target.value)}
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
