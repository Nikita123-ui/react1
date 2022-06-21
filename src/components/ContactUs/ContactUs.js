import location from '../../images/location.png';
import Message from '../../images/message.png';
import Phone2 from '../../images/phone2.png';
import Heading from '../Shared/Heading';
import Image from '../Shared/Image';
import Text from '../Shared/Text';
import './ContactUs.scss';
const ContactUs = () => {
  return (
    <div className="contactSection">
      <div className="contactPart">
        <div className="leftSide">
          <div className="leftHead">
            <Heading
              type="h1"
              text="Do you need your site/app's functionality tested"
              variant="white"
            />
          </div>
          <div className="leftPara">
            <Text
              type="p"
              text="Tell us your QA needs today and let's improve your site's quality today"
              variant="white"
              fontSize="sm"
              fontFamily="fontRegular"
            />
          </div>
          <div className="detailSide">
            <p>
              <Image src={location} alt="" /> Galaxy Weblinks Inc. 1 Broadway,
              Cambridge MA, USA 02142
            </p>
            <p>
              <img src={Phone2} alt="" /> 888.666.4316
            </p>
            <p>
              <img src={Message} alt="" /> support@galaxyqa.com
            </p>
          </div>
        </div>
        <div className="rightSide">
          <Heading type="h1" text="Project Requirements" variant="lightGray" />
          <form>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Company Name" />
            <input type="number" placeholder="Phone Number" />
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
