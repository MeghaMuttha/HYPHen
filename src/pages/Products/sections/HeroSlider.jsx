import { useEffect, useState } from 'react';
import './HeroSlider.css';
import sunscreen from '../../../assets/images/products/sunscreen.jpg';
import lipbam from '../../../assets/images/products/lipbam.jpg';
import hydration from '../../../assets/images/products/hydrastion.jpg'; // fixed spelling if needed

const heroImages = [
  sunscreen,
  lipbam,
  hydration
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % heroImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
  <div className="hero-slider-container">
    <img
      src={heroImages[currentIndex]}
      alt={`Slide ${currentIndex}`}
      className="hero-slide-img"
    />
  </div>
);
};

export default HeroSlider;
