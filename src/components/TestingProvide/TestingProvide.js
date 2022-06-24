import Heading from '../Shared/Heading';
import Link from '../Shared/Link';
import Text from '../Shared/Text';
import './TestingProvide.scss';
import { testingType } from './TestingProvideUtils';

const TestingProvide = () => {
  return (
    <div className="testingProvide">
      <div className="testingHead">
        <div className="testing">
          <Heading
            type="h1"
            text="What Testing Do We Provide?"
            variant="white"
          />
        </div>
        <div className="variantOfTesting">
          {testingType.map((item, index) => {
            return (
              <div className="row">
                {item.map((data) => {
                  return (
                    <TestingType
                      numberText={data.numberText}
                      titleText={data.titleText}
                      paraText={data.paraText}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const TestingType = (props) => {
  return (
    <div className="type1">
      <div className="numberIcon">
        <Text
          type="p"
          text={props.numberText}
          variant="blue"
          fontSize="md"
          fontFamily="fontBold"
        />
      </div>
      <div className="title">
        <Heading type="h2" text={props.titleText} variant="white" />
      </div>
      <div className="para">
        <Text
          type="p"
          text={props.paraText}
          variant="white"
          fontSize="xsm"
          fontFamily="fontRegular"
        />
      </div>
      <div className="link">
        <Link href={'#'} variant="white" size="sm" textDecoration={false}>
          Read more..
        </Link>
      </div>
    </div>
  );
};

export default TestingProvide;
