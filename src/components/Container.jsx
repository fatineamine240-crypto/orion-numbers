import PropTypes from 'prop-types';

export default function Container({ children, className }) {
  return (
    <div
      className={`rounded-lg border text-center shadow-md px-4 py-6  bg-gray-50 dark:text-gray-900 transition-colors duration-300 ${
        className ?? ''
      }`}
    >
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
