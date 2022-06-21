import Facebook from '../../images/facebook.png';
import Linkedin from '../../images/linkedin.png';
import Twitter from '../../images/twitter.png';
import Image from '../Shared/Image';
import Text from '../Shared/Text';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div class="socialIcons">
        <Image src={Facebook} alt="" />
        <Image src={Twitter} alt="" />
        <Image src={Linkedin} alt="" />
      </div>
      <div class="footerText">
        <Text
          type="p"
          text="© 1999-2019 Galaxy Weblinks. All rights reserved."
          variant="white"
          fontSize="xsm"
          fontFamily="fontFamily_Regular2"
        />
      </div>
    </footer>
  );
};
export default Footer;
