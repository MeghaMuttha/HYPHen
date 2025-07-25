import React from 'react';
import HeroSection from './sections/HeroSection';
import WhyChooseUs from './sections/WhyChooseUs';
import TransitionCircle from './sections/TransitionCircle';
import CardSection from './sections/CardSection'

import './HomePage.css'

const HomePage = () => {
  return (
    <div className="homepage-container">
      <HeroSection />
      <WhyChooseUs />
      <CardSection/>
      <TransitionCircle />
    </div>
  );
};

export default HomePage;
