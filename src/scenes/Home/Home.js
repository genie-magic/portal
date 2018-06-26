import React from 'react';
import AboutMe from './sections/AboutMe/AboutMe';
import HomeSection from './sections/Home/Home';

const Home = props => (
  <React.Fragment>
    <HomeSection />
    <AboutMe/>
  </React.Fragment>
);

export default Home;
