import PropTypes from 'prop-types';
import './Text.scss';
/**
 * Name: Text
 * Desc: Render Text
 * @param {string} text
 * @param {string} variant
 * @param {string} fontFamily
 * @param {string} fontSize
 */
const Text = ({ type, fontSize, fontFamily, variant, text }) => {
  const Component = type;
  return (
    <Component className={` ${fontSize} ${fontFamily} ${variant}`}>
      {text}
    </Component>
  );
};

Text.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOfType('p', 'span', 'div'),
  variant: PropTypes.oneOf('white', 'black', 'lightGray'),
};

export default Text;

Text.defaultProps = {
  type: 'div',
  variant: 'lightGray',
  fontSize: 'md',
};
