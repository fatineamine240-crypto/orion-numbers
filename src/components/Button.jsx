import PropTypes from 'prop-types';

export default function Button({
  type = 'button',
  text = 'Submit',
  primary = true,
  disabled = false,
  onClick,
}) {
  const defaultClass =
    'px-6 pb-2 pt-2.5 inline-block rounded text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none';

  const primaryClass =
    'bg-primary text-white shadow-[0_4px_9px_-4px_#3b71ca] hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]';
  const cancelClass =
    'bg-gray-100 shadow-[0_4px_9px_-4px_#6b7280] hover:bg-gray-200 hover:shadow-[0_8px_9px_-4px_rgba(107,114,128,0.3),0_4px_18px_0_rgba(107,114,128,0.2)] focus:bg-gray-200 focus:shadow-[0_8px_9px_-4px_rgba(107,114,128,0.3),0_4px_18px_0_rgba(107,114,128,0.2)] active:bg-gray-300 active:shadow-[0_8px_9px_-4px_rgba(107,114,128,0.3),0_4px_18px_0_rgba(107,114,128,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(107,114,128,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(107,114,128,0.2),0_4px_18px_0_rgba(107,114,128,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(107,114,128,0.2),0_4px_18px_0_rgba(107,114,128,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(107,114,128,0.2),0_4px_18px_0_rgba(107,114,128,0.1)]';

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
