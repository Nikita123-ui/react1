import Illustration from '../../images/illustration-2.png';
import Heading from '../Shared/Heading';
import Image from '../Shared/Image';
import Text from '../Shared/Text';
import './TestingProcess.scss';
import { testingProcessType } from './TestingProcessUtils';

const TestingProcess = () => {
  return (
    <div className="testingProcess">
      <div className="processHead">
        <Heading type="h2" text="Our Testing Process" variant="black" />
      </div>
      <div className="processPart">
        <div className="row2">
          {testingProcessType.map((currElement) => (
            <TestingProcessType
              icon={currElement.tpText}
              head={currElement.headText}
              subHead={currElement.pText}
            />
          ))}
        </div>
        <div className="processImage">
          <Image src={Illustration} alt="" />
        </div>
        <div className="row3">
          {testingProcessType.map((currElement) => (
            <TestingProcessType
              icon={currElement.tpText}
              head={currElement.headText}
              subHead={currElement.pText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TestingProcessType = (props) => {
  return (
    <div className="div1">
      <div className="divHead">
        <Text
          type="span"
          text={props.tpText}
          variant="blue"
          fontSize="lg"
          fontFamily="fontBold"
        />
        <Heading type="h2" text={props.headText} variant="lightGray" />
      </div>
      <div className="divPara">
        <Text
          type="p"
          text={props.pText}
          variant="lightGray"
          fontSize="xsm"
          fontFamily="fontRegular"
        />
      </div>
    </div>
  );
};

export default TestingProcess;
