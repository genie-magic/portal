import React from 'react';
import Typist from 'react-typist';
import HoverButton from '../../../../components/HoverButton/HoverButton';
import './Welcome.css';

const typistCursor = {
  show: true,
  blink: true,
  element: '_',
  hideWhenDone: true,
  hideWhenDoneDelay: 500
};
const quote =
  'Code is like humor.' +
  '\n' +
  " When you have to explain it, it's bad. - Jim Highsmith";
class Welcome extends React.Component {
  render() {
    return (
      <div className="welcome-component">
        <div className="typist-container">
          <Typist cursor={typistCursor}>
            <span className="title">
              Hello, I'm <span className="highlight">Eric Lee</span>
            </span>
            <br />
            <span className="title">Full-stack web developer</span>
            <br />
            <span className="quote">
              Code is like humor.
              <br />
              When you have to explain it, it's bad. - Jim Highsmith
            </span>
          </Typist>
        </div>
        <div className="button-container showAfter10Secs">
          <HoverButton targetID="projects-section" label="View my work" />
          <HoverButton targetID="contact-section" label="Hire me" />
        </div>
      </div>
    );
  }
}

export default Welcome;
