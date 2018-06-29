import React from 'react';
import './AboutMe.css';
import { Container, Row, Col } from 'reactstrap';
import FlowBackground from './components/FlowBackground/FlowBackground';
import Bullet from './components/Bullet/Bullet';
import FloatingPhoto from './components/FloatingPhoto/FloatingPhoto';
import Skill from './components/Skill/Skill';
import { Element } from 'react-scroll';
import { Link } from 'react-scroll';

const defaultDelay = window.defaultDelay;
const update = window.update;
const Skype = window.Skype;
const SkypeWebControl = window.SkypeWebControl;
class AboutMe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bShow: false
    };
    this.showComponent = this.showComponent.bind(this);
    this.startSkypeChat = this.startSkypeChat.bind(this);
  }

  showComponent() {
    this.setState({
      bShow: true
    });
  }
  showSVGFlow() {
    update();
  }
  componentDidMount() {
    setTimeout(this.showComponent, defaultDelay);
    //setTimeout(this.showSVGFlow, defaultDelay + 1000);
    //update();
  }

  startSkypeChat() {
    SkypeWebControl.SDK.Chat.startChat({
      ConversationType: 'person',
      ConversationId: 'live:eric.lee6174'
    });
  }
  render() {
    let hideOrShow = 'hidden';
    if (this.state.bShow === true) {
      hideOrShow = '';
    }
    return (
      <Element
        id="about-section"
        className={['about-me', hideOrShow].join(' ')}
      >
        <FlowBackground>
          <Container>
            <div className="title wow bounceInLeft animated">About Me</div>
            <div className="title-bar wow bounceInLeft animated" />
            <Row>
              <Col lg="6" xs="12">
                <Row>
                  <Col sm="6" xs="12" className="fadeIn animated wow">
                    <Bullet
                      iconName="fa-handshake-o"
                      title="Communicative"
                      description="Communication - the human connection - is the key to personal and career success."
                    />
                  </Col>
                  <Col sm="6" xs="12" className="fadeIn animated wow">
                    <Bullet
                      iconName="fa-lightbulb-o"
                      title="Creative"
                      description="Doing the same thing over and over, yet expecting different results, is the definition of crazy."
                    />
                  </Col>
                </Row>
              </Col>
              <Col lg="6" xs="12">
                <Row>
                  <Col sm="6" xs="12" className="fadeIn animated wow">
                    <Bullet
                      iconName="fa-clock-o"
                      title="Punctuality"
                      description="It is difficult to prove myself reliable when people are required to wait for me."
                    />
                  </Col>
                  <Col sm="6" xs="12" className="fadeIn animated wow">
                    <Bullet
                      iconName="fa-calendar-check-o"
                      title="Organized"
                      description="I do one thing at a time.  I do it very well.  And then I move on"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="about-me-section">
              <Col lg="6" xs="12">
                <div className="photo-container">
                  <FloatingPhoto />
                </div>
                <div className="photo-title">Who is this guy?</div>
                <div className="photo-description">
                  I am a young-motivated{' '}
                  <span className="decorate"> Full Stack Web developer</span>{' '}
                  with 8+years experience, who consider my self as a
                  quick-learner and always study new technologies for the best
                  practice and quality of work.
                  <div className="reach-out-me">
                    If you are someone who loves to make a professional
                    acquaintances,
                    <Link
                      to="contact-section"
                      className="page-scroll decorate"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      &nbsp;reach out to me&nbsp;
                    </Link>
                    to talk about technology, innovation or tennis!
                  </div>
                </div>
                <div className="connect-me">
                  <a
                    className="social-icon"
                    target="_blank"
                    href="https://github.com/tiny-tinker"
                  >
                    {' '}
                    <span className="fa fa-github" />{' '}
                  </a>
                  <a className="social-icon" onClick={this.startSkypeChat}>
                    <span className="fa fa-skype" />
                  </a>
                  <a
                    className="social-icon"
                    target="_blank"
                    href="https://www.facebook.com/confirmcontact.php?c=96312&z=0&gfid=AQDUEXSBh3yo6Lvw"
                  >
                    {' '}
                    <span className="fa fa-linkedin" />{' '}
                  </a>
                  <a
                    className="social-icon"
                    target="_blank"
                    href="https://www.facebook.com/xinzhe.li.9847"
                  >
                    {' '}
                    <span className="fa fa-facebook" />{' '}
                  </a>
                  <a
                    className="social-icon"
                    target="_blank"
                    href="mailto:eric.lee6174@gmail.com"
                  >
                    {' '}
                    <span className="fa fa-envelope" />{' '}
                  </a>
                </div>
              </Col>
              <Col lg="6" xs="12">
                <div className="skills-container">
                  <Skill rate={90} label="React" />
                  <Skill rate={85} label="Angular" />
                  <Skill rate={75} label="Vue" />
                  <Skill rate={85} label="CSS" />
                  <Skill rate={90} label="HTML" />
                  <Skill rate={85} label="Node.js" />
                  <Skill rate={70} label="Ruby/Rails" />
                  <Skill rate={90} label="PHP" />
                  <Skill rate={75} label="Express.js" />
                  <Skill rate={50} label="Photoshop" />
                </div>
              </Col>
            </Row>
          </Container>
        </FlowBackground>
      </Element>
    );
  }
}

export default AboutMe;
