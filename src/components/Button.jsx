import PropTypes from 'prop-types';

export default function Button({
  type = 'button',
  text = 'Submit',
  primary = true,
  disabled = false,
  onClick,
}) {
  const primaryClass =
    'inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]';
  const cancelClass =
    'inline-block rounded bg-gray-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#6b7280] transition duration-150 ease-in-out hover:bg-gray-200 hover:shadow-[0_8px_9px_-4px_rgba(107,114,128,0.3),0_4px_18px_0_rgba(107,114,128,0.2)] focus:bg-gray-200 focus:shadow-[0_8px_9px_-4px_rgba(107,114,128,0.3),0_4px_18px_0_rgba(107,114,128,0.2)] focus:outline-none focus:ring-0 active:bg-gray-300 active:shadow-[0_8px_9px_-4px_rgba(107,114,128,0.3),0_4px_18px_0_rgba(107,114,128,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(107,114,128,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(107,114,128,0.2),0_4px_18px_0_rgba(107,114,128,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(107,114,128,0.2),0_4px_18px_0_rgba(107,114,128,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(107,114,128,0.2),0_4px_18px_0_rgba(107,114,128,0.1)]';

  return (
    <button
      type={type}
      className={primary ? primaryClass : cancelClass}
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
