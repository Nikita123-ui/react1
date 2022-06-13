import React from 'react';
import './Heading.scss';

const Heading = ({ type, text, variant }) => {
  if (type === 'h1') {
    return <h1 className={variant}>{text}</h1>;
  } else if (type === 'h2') {
    return <h2 className={variant}>{text}</h2>;
  } else if (type === 'h3') {
    return <h3 className={variant}>{text}</h3>;
  } else if (type === 'h4') {
    return <h4 className={variant}>{text}</h4>;
  } else if (type === 'h5') {
    return <h5 className={variant}>{text}</h5>;
  } else if (type === 'h6') {
    return <h6 className={variant}>{text}</h6>;
  } else {
    return <span>{text}</span>;
  }
};
export default Heading;
