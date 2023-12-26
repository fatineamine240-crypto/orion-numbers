import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, RadioGroup, Select } from '../Form';
import { Button } from '..';

export default function TimesTable() {
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
        name="table"
        options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Custom']}
        defaultValue={selectedOption}
        onChange={handleSelectChange}
      />

      {selectedOption === 'Custom' && (
        <Input
          type="number"
          name="tableNumber"
          labelText="Table number"
          defaultValue={selectedTable}
          onChange={(e) => setSelectedTable(e.target.value)}
        />
      )}

      <RadioGroup
        labelText="Question Order"
        name="order"
        options={['ascending', 'descending', 'random']}
        checked={questionOrder}
        onChange={(e) => setQuestionOrder(e.target.value)}
      />

      <div className="mt-6">
        <Button type="submit" text="Start Quiz" onClick={handleSubmit} />
      </div>
    </Form>
  );
}
