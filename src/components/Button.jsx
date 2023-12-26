import PropTypes from 'prop-types';

export default function Button({
  type = 'button',
  text = 'Submit',
  primary = true,
  disabled = false,
  onClick,
}) {
  const defaultClass =
    'px-6 pb-2 pt-2.5 inline-block rounded text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none shadow hover:shadow-lg focus:shadow-lg active:shadow-lg dark:shadow-none dark:hover:shadow-md dark:focus:shadow-md dark:active:shadow-lg';

  const primaryClass =
    'bg-primary text-white hover:bg-secondary focus:bg-secondary active:bg-secondary';
  const cancelClass = 'bg-gray-100';

  const disabledStyles = 'cursor-not-allowed opacity-50';

  const buttonClass = `${defaultClass} ${
    primary ? primaryClass : cancelClass
  } ${disabled ? disabledStyles : ''}`;

  return (
    <button
      type={type}
      className={buttonClass}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
