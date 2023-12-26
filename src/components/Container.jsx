import PropTypes from 'prop-types';

export default function Container({ children }) {
  return (
    <div className="rounded-lg border text-center shadow-md">{children}</div>
  );
}

Container.propTypes = {
  children: PropTypes.node,
};
