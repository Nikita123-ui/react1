import PropTypes from 'prop-types';
import './Button.scss';
/**
 * Name : Button
 * Desc : Render Button
 * @param {string} variant
 * @param {string} size
 * @param {string} type
 * @param {node}   children
 * @param {string} className
 */
const Button = ({ children, type, variant, size }) => {
  const className = `${variant} ${size}`;
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
};
export default Button;

Button.defaultProps = {
  type: 'button',
  size: 'sm',
  variant: 'white',
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['btn-sm', 'btn-lg']),
  type: PropTypes.oneOf(['button', 'submit']),
  children: PropTypes.node,
  className: PropTypes.string,
};
