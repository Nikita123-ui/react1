import PropTypes from 'prop-types';
import './Image.scss';
/**
 * Name:Image
 * Desc: Render image
 * @param {string} src
 * @param {string} title
 * @param {string} alt
 */

const Image = ({ src, title }) => {
  return <img src={src} alt={title} />;
};

export default Image;

Image.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
