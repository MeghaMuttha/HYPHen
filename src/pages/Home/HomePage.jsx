import React from 'react';
import HeroSection from './sections/HeroSection';
import './HomePage.css'; // Optional if you're styling the wrapper
import WhyChooseUs from './sections/WhyChooseUs';
import TransitionCircle from './sections/TransitionCircle';



const HomePage = () => {
  return (
    <div className="homepage-container">
      <HeroSection />
      <WhyChooseUs/>
      <TransitionCircle/>

    </div>
  );
};

export default HomePage;
