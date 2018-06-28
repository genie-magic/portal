import React from 'react';
import { Container } from 'reactstrap';
import PhotoGrid from './components/PhotoGrid/PhotoGrid';
import './Projects.css';

class Projects extends React.Component {
  render() {
    return(
      <div className="projects-section">
        <Container>
          <div className="title wow bounceInLeft animated">
            Projects
          </div>
          <div className="title-bar wow bounceInLeft animated"/>
          <PhotoGrid/>
        </Container>
      </div>
    );
  }
}

export default Projects;