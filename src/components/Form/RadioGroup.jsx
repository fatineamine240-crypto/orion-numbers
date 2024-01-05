import PropTypes from 'prop-types';
import { useState } from 'react';

export default function RadioGroup({ name, labelText, options, onChange }) {
  const [selected, setSelected] = useState(options[0]);

  const handleChange = (e) => {
    setSelected(e.target.value);
    onChange(e);
  };

  return (
    <div>
      <label
        htmlFor={name}
        className="text-gray-700 dark:text-gray-200 transition-colors duration-300"
      >
        {labelText || name}
      </label>

      <div className="mt-2 space-y-2">
        {options.map((option) => (
          <div key={option} className="flex items-center">
            <input
              type="radio"
              id={`${name}-${option}`}
              name={name}
              value={option}
              checked={selected === option}
              onChange={handleChange}
              className="form-radio text-teal-500 focus:border-teal-700 dark:text-blue-300 dark:focus:border-blue-300 dark:checked:bg-gray-700 dark:checked:border-gray-700 transition-colors duration-300"
            />
            <label
              htmlFor={`${name}-${option}`}
              className="ml-2 text-gray-700 dark:text-gray-300 transition-colors duration-300"
            >
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

RadioGroup.propTypes = {
  name: PropTypes.string,
  labelText: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};
