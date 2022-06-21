import Heading from '../Shared/Heading';
import Image from '../Shared/Image';
import Text from '../Shared/Text';
import './Services.scss';
import { serviceType } from './ServiceUtils';

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
      {serviceType.map((currElement, index) => {
        return (
          <div className="row">
            {currElement.map((data) => {
              return (
                <ServiceType
                  icon={data.icon}
                  head={data.head}
                  subHead={data.subHead}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

const ServiceType = (props) => {
  return (
    <div className="box1">
      <div className="boxImg">
        <Image src={props.icon} alt="" />
      </div>
      <div className="boxTitle">
        <Heading type="h2" text={props.head} variant="lightGray" />
      </div>
      <div className="boxSubTitle">
        <Text
          type="p"
          text={props.subHead}
          variant="lightGray"
          fontSize="xsm"
          fontFamily="fontRegular"
        />
      </div>
    </div>
  );
};
export default Services;
