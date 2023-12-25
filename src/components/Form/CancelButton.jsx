import PropTypes from 'prop-types';

export default function CancelButton({ text = 'Cancel', onClick }) {
  return (
    <button
      type="button"
      className="inline-block rounded bg-gray-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#6b7280] transition duration-150 ease-in-out hover:bg-gray-200 hover:shadow-[0_8px_9px_-4px_rgba(107,114,128,0.3),0_4px_18px_0_rgba(107,114,128,0.2)] focus:bg-gray-200 focus:shadow-[0_8px_9px_-4px_rgba(107,114,128,0.3),0_4px_18px_0_rgba(107,114,128,0.2)] focus:outline-none focus:ring-0 active:bg-gray-300 active:shadow-[0_8px_9px_-4px_rgba(107,114,128,0.3),0_4px_18px_0_rgba(107,114,128,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(107,114,128,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(107,114,128,0.2),0_4px_18px_0_rgba(107,114,128,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(107,114,128,0.2),0_4px_18px_0_rgba(107,114,128,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(107,114,128,0.2),0_4px_18px_0_rgba(107,114,128,0.1)]"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

CancelButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
