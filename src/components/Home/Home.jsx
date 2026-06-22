import React from 'react';
import Hero from './Hero';
import Feature from './Feature';
import Menu from '../FoodMenu/Menu';
import AboutUs from './AboutUs';


const Home = () => {
  return (
    <div>
     <Hero></Hero>
     <Feature></Feature>
     <Menu></Menu>
     <AboutUs></AboutUs>
    </div>
  );
};

export default Home;