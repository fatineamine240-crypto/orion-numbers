import PropTypes from 'prop-types';

export default function Input({
  type = 'text',
  name,
  value,
  labelText,
  required,
  hideLabel = false,
  onChange,
}) {
  return (
    <div>
      {!hideLabel && (
        <label htmlFor={name} className="text-gray-700 dark:text-gray-200">
          {labelText || name}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        required={required}
        onChange={onChange}
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-gray-400 dark:focus:border-gray-300 outline-none"
        autoComplete="off"
      />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  labelText: PropTypes.string,
  required: PropTypes.bool,
  hideLabel: PropTypes.bool,
  onChange: PropTypes.func,
};
