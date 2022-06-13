import React from 'react';

const Image = ({ src, height, width, title }) => {
  return <img src={src} alt={title} />;
};

export default Image;
