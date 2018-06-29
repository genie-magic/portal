import React from 'react';
import Typist from 'react-typist';
import { Element } from 'react-scroll';
import { Container } from 'reactstrap';
import BubbleBackground from './components/BubbleBackground/BubbleBackground';
import Welcome from './components/Welcome/Welcome';
import Menu from '../../components/Menu/Menu';
import './Home.css';
import Dodecahedron from '../../components/Dodecahedron/Dodecahedron';

class Home extends React.Component {
  render() {
    return (
      <Element id="home-section" className="home-section">
        <BubbleBackground>
          <Container>
            <Welcome />
            <Dodecahedron />
          </Container>
        </BubbleBackground>
        <Menu />
      </Element>
    );
  }
}

export default Home;
