import React from 'react';
import AboutMe from './sections/AboutMe/AboutMe';
import HomeSection from './sections/Home/Home';
import Projects from "./sections/Projects/Projects";

const Home = props => (
  <React.Fragment>
    <HomeSection />
    <AboutMe/>
    <Projects/>
  </React.Fragment>
);

export default Home;
