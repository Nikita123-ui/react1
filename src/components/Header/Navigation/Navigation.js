import React from 'react';
import './Navigation.scss';

const Navigation = ({ nav }) => {
  return (
    <ul>
      {nav.map((nav, index) => (
        <li key={index}>
          <a href={nav.url}>{nav.title}</a>
        </li>
      ))}
    </ul>
  );
};
export default Navigation;
