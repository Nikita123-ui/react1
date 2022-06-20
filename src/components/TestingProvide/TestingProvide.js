import Heading from '../Shared/Heading';
import Text from '../Shared/Text';
import './TestingProvide.scss';

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
          <div className="row">
            <div className="type1">
              <div className="numberIcon">
                <Text
                  type="p"
                  text="1"
                  variant="blue"
                  fontSize="md"
                  fontFamily="fontBold"
                />
              </div>
              <div className="title">
                <Heading type="h" text="Functional Testing" variant="white" />
              </div>
              <div className="para">
                <Text
                  type="p"
                  text="We'll generate an extensive list of functional test cases and
                  scenarios to be executed across various Windows and Mac devices"
                  variant="white"
                  fontSize="xsm"
                  fontFamily="fontRegular"
                />
              </div>
              <div className="link">
                <a href="#">Read more…</a>
              </div>
            </div>
            <div className="type2">
              <div className="numberIcon">
                <Text
                  type="p"
                  text="2"
                  variant="blue"
                  fontSize="md"
                  fontFamily="fontBold"
                />
              </div>
              <div className="title">
                <Heading type="h2" text="Automation Testing" variant="white" />
              </div>
              <div className="para">
                <Text
                  type="p"
                  text="Would you like a robust test automation setup that your team
                  can run before releasing website updates?"
                  variant="white"
                  fontSize="xsm"
                  fontFamily="fontRegular"
                />
              </div>
              <div className="link">
                <a href="#">Read more…</a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="type3">
              <div className="numberIcon">
                <Text
                  type="p"
                  text="3"
                  variant="blue"
                  fontSize="md"
                  fontFamily="fontBold"
                />
              </div>
              <div className="title">
                <Heading type="h2" text="API Testing" variant="white" />
              </div>
              <div className="para">
                <Text
                  type="p"
                  text="We will ensure that your API's run coherently and avoid any
                  corner cases, delay in processing, or security breaches for
                  internal or external API."
                  variant="white"
                  fontSize="xsm"
                  fontFamily="fontRegular"
                />
              </div>
              <div className="link">
                <a href="#">Read more…</a>
              </div>
            </div>
            <div className="type4">
              <div className="numberIcon">
                <Text
                  type="p"
                  text="4"
                  variant="blue"
                  fontSize="md"
                  fontFamily="fontBold"
                />
              </div>
              <div className="title">
                <Heading type="h2" text="UX Testing" variant="white" />
              </div>
              <div className="para">
                <Text
                  type="p"
                  text=" Harnessing a capable team of in-house UX experts that will
                  acquire feedback from end users that are similar to your
                  target audience to inform our UX report."
                  variant="white"
                  fontSize="xsm"
                  fontFamily="fontRegular"
                />
              </div>
              <div className="link">
                <a href="#">Read more…</a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="type5">
              <div className="numberIcon">
                <Text
                  type="p"
                  text="5"
                  variant="blue"
                  fontSize="md"
                  fontFamily="fontBold"
                />
              </div>
              <div className="title">
                <Heading
                  type="h2"
                  text="Cross-Browser Testing"
                  variant="white"
                />
              </div>
              <div className="para">
                <Text
                  type="p"
                  text=" Galaxy uses a mixture of manual and automated techniques to
                  deliver an insightful report that covers cross-browser
                  compatibility checks for your website or app."
                  variant="white"
                  fontSize="xsm"
                  fontFamily="fontRegular"
                />
              </div>
              <div className="link">
                <a href="#">Read more…</a>
              </div>
            </div>
            <div className="type6">
              <div className="numberIcon">
                <Text
                  type="p"
                  text="6"
                  variant="blue"
                  fontSize="md"
                  fontFamily="fontBold"
                />
              </div>
              <div className="title">
                <Heading type="h2" text="Performance Testing" variant="white" />
              </div>
              <div className="para">
                <Text
                  type="p"
                  text="Does your website crash or run slow when too many people
                  simultaneously interact with your site? A slow or crashing
                  site could mean losing a potential company."
                  variant="white"
                  fontSize="xsm"
                  fontFamily="fontRegular"
                />
              </div>
              <div className="link">
                <a href="#">Read more…</a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="type7">
              <div className="numberIcon">
                <Text
                  type="p"
                  text="7"
                  variant="blue"
                  fontSize="md"
                  fontFamily="fontBold"
                />
              </div>
              <div className="title">
                <Heading type="h2" text="Security Testing" variant="white" />
              </div>
              <div className="para">
                <Text
                  type="p"
                  text="Security issues not only impact your users, but also your
                  company's reputation. Galaxy can help you identify broad-level
                  security issues with your website and prevent these damages."
                  variant="white"
                  fontSize="xsm"
                  fontFamily="fontRegular"
                />
              </div>
              <div className="link">
                <a href="#">Read more…</a>
              </div>
            </div>
            <div className="type8">
              <div className="numberIcon">
                <Text
                  type="p"
                  text="8"
                  variant="blue"
                  fontSize="md"
                  fontFamily="fontBold"
                />
              </div>
              <div className="title">
                <Heading type="h2" text="Payment Testing" variant="white" />
              </div>
              <div className="para">
                <Text
                  type="p"
                  text="We perform global payment testing for your e-commerce sites,
                  in-app purchases, POS, and mobile wallets. This will improve
                  your customer's experience, build trust, that there's complete
                  flexibility."
                  variant="white"
                  fontSize="xsm"
                  fontFamily="fontRegular"
                />
              </div>
              <div className="link">
                <a href="#">Read more…</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestingProvide;
