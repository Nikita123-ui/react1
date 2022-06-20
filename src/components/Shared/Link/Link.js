import PropTypes from 'prop-types';
import './Link.scss';
/**
 * Name: Link
 * Desc: Render Link
 * @param {node} children
 
 */

const Link = ({ url, children, size, textDecoration, variant, className }) => {
  const classTextDecoration = textDecoration ? '' : 'textDecoration';
  return (
    <a
      href={url}
      className={` ${size} ${classTextDecoration} ${variant} ${className}`}
    >
      {children}
    </a>
  );
};

export default Link;

Link.defaultProps = {
  url: '#',
  textDecoration: true,
};
// Props validation
Link.propTypes = {
  children: PropTypes.node,
};
