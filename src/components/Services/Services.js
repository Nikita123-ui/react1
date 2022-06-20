import Icon3 from '../../images/combined-shape.png';
import Icon1 from '../../images/icon1.png';
import Icon2 from '../../images/icon2.png';
import Icon5 from '../../images/icon5.png';
import Icon6 from '../../images/icon6.png';
import Icon4 from '../../images/microscope.png';
import Heading from '../Shared/Heading';
import Image from '../Shared/Image';
import Text from '../Shared/Text';

import './Services.scss';
const Services = () => {
  return (
    <div className="services">
      <div className="servicesHead">
        <Heading
          type="h1"
          text="How Do These Independent QA Services Help You?"
          variant="lightGray"
        />
      </div>
      <div className="row">
        <div className="box1">
          <div className="boxImg">
            <Image src={Icon1} alt="" />
          </div>
          <div className="boxTitle">
            <Heading
              type="h2"
              text="You'll Have Higher-Quality Websites/App"
              variant="lightGray"
            />
          </div>
          <div className="boxSubTitle">
            <Text
              type="p"
              text="This will help you deliver a smooth, bug-free experience to your
              website users."
              variant="lightGray"
              fontSize="xsm"
              fontFamily="fontRegular"
            />
          </div>
        </div>
        <div className="box2">
          <div className="boxImg">
            <Image src={Icon2} alt="" />
          </div>
          <div className="boxTitle">
            <Heading type="h2" text="On-Demand Service" variant="lightGray" />
          </div>
          <div className="boxSubTitle">
            <Text
              type="p"
              text="This option allows you to easily scale-up or scale-down the
              service/services based on your QA projects."
              variant="lightGray"
              fontSize="xsm"
              fontFamily="fontRegular"
            />
          </div>
        </div>
        <div className="box3">
          <div className="boxImg">
            <Image src={Icon3} alt="" />
          </div>
          <div className="boxTitle">
            <Heading
              type="h2"
              text="Independent and Unbiased"
              variant="lightGray"
            />
          </div>
          <div className="boxSubTitle">
            <Text
              type="p"
              text="We can identify potential bugs which your team may have
              overlooked."
              variant="lightGray"
              fontSize="xsm"
              fontFamily="fontRegular"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="box4">
          <div className="boxImg">
            <Image src={Icon4} alt="" />
          </div>
          <div className="boxTitle">
            <Heading type="h2" text="Device Lab" variant="lightGray" />
          </div>
          <div className="boxSubTitle">
            <Text
              type="p"
              text=" You can enjoy the benefits of our lab subscriptions enabling us to
              access hundreds of devices at once."
              variant="lightGray"
              fontSize="xsm"
              fontFamily="fontRegular"
            />
          </div>
        </div>
        <div className="box5">
          <div className="boxImg">
            <Image src={Icon5} alt="" />
          </div>
          <div className="boxTitle">
            <Heading
              type="h2"
              text="More Bang for Your Buck"
              variant="lightGray"
            />
          </div>
          <div className="boxSubTitle">
            <Text
              type="p"
              text="Don't overpay for services from a large company with unrefined
              crowdsourcing — choose custom, in-house services at comparable
              costs. "
              variant="lightGray"
              fontSize="xsm"
              fontFamily="fontRegular"
            />
          </div>
        </div>
        <div className="box6">
          <div className="boxImg">
            <Image src={Icon6} alt="" />
          </div>
          <div className="boxTitle">
            <Heading type="h2" text="Timely Deliverance" variant="lightGray" />
          </div>
          <div className="boxSubTitle">
            <Text
              type="p"
              text="We'll rapidly and efficiently identify bugs to swiftly launch your
              website or app. "
              variant="lightGray"
              fontSize="xsm"
              fontFamily="fontRegular"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// const ServiceType = () => {
//   return (
//     <div className="box1">
//       <div className="boxImg">
//         <Image src={Icon1} alt="" />
//       </div>
//       <div className="boxTitle">
//         <Heading
//           type="h2"
//           text="You'll Have Higher-Quality Websites/App"
//           variant="lightGray"
//           size="md"
//           fontFamily="fontSemiBold"
//           fontWeight="fontWeight_600"
//         />
//       </div>
//       <div className="boxSubTitle">
//         <p>
//           This will help you deliver a smooth, bug-free experience to your
//           website users.
//         </p>
//       </div>
//     </div>
//   );
// };
export default Services;
