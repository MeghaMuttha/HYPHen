import { useEffect, useRef } from 'react';
import './HeroSection.css';
import { gsap } from 'gsap';

import hero1 from '../../../assets/images/hero/';
import hero2 from '../../../assets/images/';
import hero3 from '../../../assets/images/';
import hero4 from '../../../assets/images/';

const HeroSection0 = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const q = gsap.utils.selector(heroRef);

    // Animate hero images
    gsap.from(q('.hero-img'), {
      opacity: 0,
      y: 50,
      scale: 0.9,
      stagger: 0.2,
      duration: 1.2,
      ease: 'power3.out',
    });

    // Animate hero text
    gsap.from(q('.hero-text h1, .hero-text p, .hero-text button'), {
      opacity: 0,
      x: 100,
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.8,
      stagger: 0.2,
    });
  }, []);

  return (
    <section className="hero-wrapper" ref={heroRef}>
      <div className="hero-grid">
        <img src={hero1} alt="Hero 1" className="hero-img img-1" />
        <img src={hero2} alt="Hero 2" className="hero-img img-2" />
        <img src={hero3} alt="Hero 3" className="hero-img img-3" />
        <img src={hero4} alt="Hero 4" className="hero-img img-4" />
      </div>
      <div className="hero-text">
        <h1>Skincare That <span>Empowers</span></h1>
        <p>Formulated with purpose. Backed by science. Rooted in nature.</p>
        <button>Shop Now</button>
      </div>
    </section>
  );
};

export default HeroSection0;
