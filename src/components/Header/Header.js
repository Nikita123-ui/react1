import PropTypes from 'prop-types';
import Downjohn from '../../images/dowjohnes.png';
import Hipoki from '../../images/hipoki.png';
import logo from '../../images/logo.png';
import Netger from '../../images/netger.png';
import Phone from '../../images/phone.png';
import Sony from '../../images/sony.png';
import Staples from '../../images/staples.png';
import Tivo from '../../images/tivo.png';
import Button from '../Shared/Button/Button';
import Heading from '../Shared/Heading';
import Image from '../Shared/Image';
import Text from '../Shared/Text';
import './Header.scss';
import { navigation } from './HeaderUtils';
import Navigation from './Navigation';
/**
 * Name: Header
 * Desc: Render Header
 * @param {object} nav
 * @param {string}Image

 */
const Header = () => {
  return (
    <header>
      <div className="header-nav">
        <div className="logo">
          <Image src={logo} title="logo" />
        </div>
        <div className="topNav">
          <div>
            <Navigation nav={navigation} />
          </div>
          <div className="number">
            <Image src={Phone} />
            888.666.4316
          </div>
        </div>
      </div>
      <div className="aboutTeam">
        <Heading
          type="h1"
          text="YOUR PERSONALIZED QA TESTING TEAM"
          variant="white"
        />
        <Text
          type="span"
          text="Want a hands-on team that can provide a custom experience? With our in-house team of QA pros,
           we can identify and solve critical issues related to browser compatibility, functionality, security, 
           or performance of your website or mobile app."
          variant="white"
          fontSize="sm"
          fontFamily="fontRegular"
        />
        <div className="btn">
          <Button variant="blackAndBlue" size="btn-sm">
            Get started
          </Button>
        </div>
      </div>

      <div className="brandPartners">
        <Heading type="h1" text="Trusted by" variant="black" />
        <div className="brandIcon">
          <Image src={Sony} alt="" />
          <Image src={Netger} alt="" />
          <Image src={Staples} alt="" />
          <Image src={Downjohn} alt="" />
          <Image src={Tivo} alt="" />
          <Image src={Hipoki} alt="" />
        </div>
      </div>
    </header>
  );
};
export default Header;
//PropTypes validation
Header.propTypes = {
  nav: PropTypes.object,
  Image: PropTypes.string,
};
