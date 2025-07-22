import React from 'react';
import HeroSection from './sections/HeroSection';
import WhyChooseUs from './sections/WhyChooseUs';
import TransitionCircle from './sections/TransitionCircle';
import CardSection from './sections/CardSection'



const HomePage = () => {
  return (
    <div className="homepage-container">
      <HeroSection />
      <WhyChooseUs />
      <CardSection/>
      {/* <div style={{ height: '600px', position: 'relative' }}>
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={4000}
          pauseOnHover={true}
          width={500}
          height={400}
        >
          <Card>
            <h3>Card 1</h3>
            <p>This is the first card.</p>
          </Card>
          <Card>
            <h3>Card 2</h3>
            <p>This is the second card.</p>
          </Card>
          <Card>
            <h3>Card 3</h3>
            <p>This is the third card.</p>
          </Card>
        </CardSwap>
      </div> */}

      <TransitionCircle />
    </div>
  );
};

export default HomePage;
