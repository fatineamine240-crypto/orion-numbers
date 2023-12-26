import PropTypes from 'prop-types';

export default function Container({ children }) {
  return (
    <div className="block rounded-lg border-2 text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node,
};
