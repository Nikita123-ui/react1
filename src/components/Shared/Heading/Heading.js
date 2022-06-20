import PropTypes from 'prop-types';
import './Heading.scss';

/**
 * Name: Heading
 * Desc: Render heading
 * @param {string} type
 * @param {string,element} text
 * @param {string} className
 */

const Heading = ({ type, text, variant }) => {
  const Component = type;
  const className = `${variant} `;
  return <Component className={className}>{text}</Component>;
  // if (type === 'h1') {
  //   return <h1 className={variant}>{text}</h1>;
  // } else if (type === 'h2') {
  //   return <h2 className={variant}>{text}</h2>;
  // } else if (type === 'h3') {
  //   return <h3 className={variant}>{text}</h3>;
  // } else if (type === 'h4') {
  //   return <h4 className={variant}>{text}</h4>;
  // } else if (type === 'h5') {
  //   return <h5 className={variant}>{text}</h5>;
  // } else if (type === 'h6') {
  //   return <h6 className={variant}>{text}</h6>;
  // } else {
  //   return <span>{text}</span>;
  // }
};
export default Heading;

Heading.defaultProps = {
  type: 'h1',
  variant: 'white',
};

// Props Validation
Heading.propTypes = {
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
};
