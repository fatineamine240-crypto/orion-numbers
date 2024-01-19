import PropTypes from 'prop-types';
import { useState } from 'react';

export default function RadioGroup({
  name,
  labelText,
  options,
  onChange,
  checked,
}) {
  const [selected, setSelected] = useState(
    checked || options[0].value || options[0]
  );

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
          <div key={option.value || option} className="flex items-center">
            <input
              type="radio"
              id={`${name}-${option.value || option}`}
              name={name}
              value={option.value || option}
              checked={selected === (option.value || option)}
              onChange={handleChange}
              className="form-radio text-teal-500 focus:border-teal-700 dark:text-blue-300 dark:focus:border-blue-300 dark:checked:bg-gray-700 dark:checked:border-gray-700 transition-colors duration-300"
            />
            <label
              htmlFor={`${name}-${option.value || option}`}
              className="mx-2 text-gray-700 dark:text-gray-100 transition-colors duration-300"
            >
              {option.label || option}
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
  options: PropTypes.array,
  onChange: PropTypes.func,
  checked: PropTypes.string,
};
