import Illustration from '../../images/illustration-2.png';
import Heading from '../Shared/Heading';
import Image from '../Shared/Image';
import Text from '../Shared/Text';
import './TestingProcess.scss';

const TestingProcess = () => {
  return (
    <div className="testingProcess">
      <div className="processHead">
        <Heading type="h2" text="Our Testing Process" variant="black" />
      </div>
      <div className="processPart">
        <div className="row2">
          <div className="div1">
            <div className="divHead">
              <Text
                type="span"
                text="1"
                variant="blue"
                fontSize="lg"
                fontFamily="fontBold"
              />
              <Heading type="h2" text="Initiation" variant="lightGray" />
            </div>
            <div className="divPara">
              <Text
                type="p"
                text="With Galaxy, we'll define the scope of work, specific tasks, and
                discuss deliverables and timelines."
                variant="lightGray"
                fontSize="xsm"
                fontFamily="fontRegular"
              />
            </div>
          </div>
          <div className="div2">
            <div className="divHead">
              <Text
                type="span"
                text="2"
                variant="blue"
                fontSize="lg"
                fontFamily="fontBold"
              />
              <Heading
                type="h2"
                text="Requirement Gathering"
                variant="lightGray"
              />
            </div>
            <div className="divPara">
              <Text
                type="p"
                text="Tell us your expectations, goals, and what you want the project
                to accomplish."
                variant="lightGray"
                fontSize="xsm"
                fontFamily="fontRegular"
              />
            </div>
          </div>
          <div className="div3">
            <div className="divHead">
              <Text
                type="span"
                text="3"
                variant="blue"
                fontSize="lg"
                fontFamily="fontBold"
              />
              <Heading
                type="h2"
                text="Test Requirements & Planning"
                variant="lightGray"
              />
            </div>
            <div className="divPara">
              <Text
                type="p"
                text="You'll receive a custom-designed test plan with specific
                objectives, resources, and processes. We'll assess risk to
                identify potential threats and possible hurdles."
                variant="lightGray"
                fontSize="xsm"
                fontFamily="fontRegular"
              />
            </div>
          </div>
        </div>
        <div className="processImage">
          <Image src={Illustration} alt="" />
        </div>
        <div className="row3">
          <div className="div1">
            <div className="divHead">
              <Text
                type="span"
                text="4"
                variant="blue"
                fontSize="lg"
                fontFamily="fontBold"
              />
              <Heading type="h2" text="Environment Setup" variant="lightGray" />
            </div>
            <div className="divPara">
              <Text
                type="p"
                text="We'll decide the right software and hardware configuration for
                you in order to execute the software that will allow us to
                examine all the application functionalities."
                variant="lightGray"
                fontSize="xsm"
                fontFamily="fontRegular"
              />
            </div>
          </div>
          <div className="div2">
            <div className="divHead">
              <Text
                type="span"
                text="5"
                variant="blue"
                fontSize="lg"
                fontFamily="fontBold"
              />
              <Heading
                type="h2"
                text="Execution and Defect Tracking"
                variant="lightGray"
              />
            </div>
            <div className="divPara">
              <Text
                type="p"
                text="Extensive testing will allow us to record all the statistics
                found in the results, review it for all the modules, track the
                defects found, and generate insights for you."
                variant="lightGray"
                fontSize="xsm"
                fontFamily="fontRegular"
              />
            </div>
          </div>
          <div className="div3">
            <div className="divHead">
              <Text
                type="span"
                text="6"
                variant="blue"
                fontSize="lg"
                fontFamily="fontBold"
              />
              <Heading type="h2" text="Iterate" variant="lightGray" />
            </div>
            <div className="divPara">
              <Text
                type="p"
                text="In case there are areas that need worked on again, we'll take
                care of it. We neither want our partners or our software to be
                bugged because you deserve a fully optimized site/app."
                variant="lightGray"
                fontSize="xsm"
                fontFamily="fontRegular"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestingProcess;
