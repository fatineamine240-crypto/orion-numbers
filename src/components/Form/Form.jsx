import PropTypes from 'prop-types';

export default function Form({
  children,
  className,
  method,
  action,
  onSubmit,
}) {
  return (
    <form
      className={`capitalize ${className}`}
      method={method}
      action={action}
      onSubmit={onSubmit}
    >
      <div className="space-y-4">{children}</div>
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  method: PropTypes.string,
  action: PropTypes.string,
  onSubmit: PropTypes.func,
};
