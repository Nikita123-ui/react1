import React from 'react';
import logo from '../../images/logo.png';
import Heading from '../Shared/Heading';
import Image from '../Shared/Image';
import './Header.scss';
import { navgations } from './HeaderUtils';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header>
      <div className="header-nav">
        <div className="logo">
          <Image src={logo} title="logo" />
        </div>
        <div className="topnav">
          <Navigation nav={navgations} />
        </div>
      </div>
      <div className="aboutTeam">
        <Heading
          type="h1"
          text="YOUR PERSONALIZED QA TESTING TEAM"
          variant="white"
        />
      </div>
    </header>
  );
};
export default Header;
