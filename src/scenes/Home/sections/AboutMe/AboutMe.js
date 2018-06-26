import React from 'react';
import './AboutMe.css';
import { Container } from 'reactstrap';
import FlowBackground from "./components/FlowBackground/FlowBackground";

const defaultDelay = window.defaultDelay;
class AboutMe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bShow: false
    };
    this.showComponent = this.showComponent.bind(this);
  }

  showComponent() {
    this.setState({
      bShow: true
    });
  }
  componentDidMount() {
    console.log('Default Delay here');
    console.log(defaultDelay);
    setTimeout(this.showComponent, defaultDelay);
  }

  render() {
    let hideOrShow = 'hidden';
    if(this.state.bShow == true) {
      hideOrShow = '';
    }
    return (
      <div className={['about-me', hideOrShow].join(' ')}>
        <Container>
          <FlowBackground>
          </FlowBackground>
        </Container>
      </div>
    )
  }
}

export default AboutMe;