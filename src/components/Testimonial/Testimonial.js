import University from '../../images/bitmap.png';
import CircleBlank from '../../images/circle blank.png';
import CircleFill from '../../images/Circle-icon.png';
import NetgearBlack from '../../images/netgear-logo-black.png';
import StaplesLogo from '../../images/staplesLogo.png';
import Heading from '../Shared/Heading';
import Image from '../Shared/Image';
import Text from '../Shared/Text';
import './Testimonial.scss';

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonialHead">
        <Heading type="h1" text="Testimonials" variant="black" />
      </div>
      <div className="row1">
        <div className="brands">
          <Image src={University} alt="" />
          <Image src={NetgearBlack} alt="" />
          <Image src={StaplesLogo} alt="" />
        </div>
        <div className="circle">
          <Image src={CircleBlank} />
          <Image src={CircleFill} />
          <Image src={CircleBlank} />
        </div>
        <div className="testimonialPara">
          <Text
            type="p"
            text="We wanted to know what our end-users were experiencing when
            visiting our website. After Galaxy's UX Testing, we not only had a
            better understanding of their experience with our site, but also how
            they were interacting with it and that helped us to improve our
            site."
            variant="gray"
            fontFamily="fontRegular"
            fontSize="sm"
          />
          <span className="head">Andy Markov</span>
          <span className="subHead">- Head of design Netgear</span>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
