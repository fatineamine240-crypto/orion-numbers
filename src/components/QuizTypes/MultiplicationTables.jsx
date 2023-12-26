import { useState } from 'react';
import { redirect } from 'react-router-dom';
import { Form, Input, RadioGroup, Select } from '../Form';

export default function TimesTable() {
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

    console.log(multiplicand);
    console.log(questionOrder);
    return redirect('/quiz');
  };

  return (
    <Form onSubmit={handleSubmit}>
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
    </Form>
  );
}
