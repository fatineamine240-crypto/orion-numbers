import PropTypes from 'prop-types';

export default function Select({
  name,
  labelText,
  defaultValue = '',
  options,
  onChange,
}) {
  return (
    <div>
      <label htmlFor={name} className="text-gray-700 dark:text-gray-200">
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        defaultValue={defaultValue}
        onChange={onChange}
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
      >
        {options.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}

Select.propTypes = {
  name: PropTypes.string,
  defaultValue: PropTypes.string,
  labelText: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
};
