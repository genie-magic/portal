import React from 'react';
import { Container } from 'reactstrap';
import { Element } from 'react-scroll';
import PhotoGrid from './components/PhotoGrid/PhotoGrid';
import './Projects.css';

class Projects extends React.Component {
  render() {
    return (
      <Element id="projects-section" className="projects-section">
        <Container>
          <div className="title wow bounceInLeft animated">Projects</div>
          <div className="title-bar wow bounceInLeft animated" />
          <PhotoGrid />
        </Container>
      </Element>
    );
  }
}

export default Projects;
