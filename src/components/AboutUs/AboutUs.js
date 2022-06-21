import Heading from '../Shared/Heading';
import Text from '../Shared/Text';
import './AboutUs.scss';

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <Heading type="h1" text="Why are we so different?" variant="black" />
      <Text
        type="p"
        text="We've bridged the gap between designers and developers, forming a
        cohesive team that know how to work together. We will compare software
        from different perspectives vis-a-vis client, user, and developer as
        well as evaluate your software for interoperability and security to
        ensure the safety of the product. Regardless of your timezone, you'll
        receive an account manager who will provide you with offshore support
        any time of day."
        variant="lightGray"
        fontSize="sm"
        fontFamily="fontRegular"
      />
    </div>
  );
};
export default AboutUs;
