import PropTypes from 'prop-types';
import BtnPrimary from '../BtnPrimary';

export default function Form({
  children,
  submitLabel = 'Start Quiz',
  className,
  onSubmit,
  submitDisabled,
  method,
  action,
}) {
  return (
    <form
      className={`capitalize ${className}`}
      onSubmit={onSubmit}
      method={method}
      action={action}
    >
      <div className="space-y-4">{children}</div>

      <div className="mt-6">
        <BtnPrimary
          type="submit"
          text={submitLabel}
          disabled={submitDisabled}
        />
      </div>
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.node,
  submitLabel: PropTypes.string,
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  submitDisabled: PropTypes.bool,
  method: PropTypes.string,
  action: PropTypes.string,
};
