import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HeroSection.css';
import { BlurText } from '../../animations/BlurText/BlurText.jsx';

import imageLeft from '../../../assets/images/hero/imageLeft.png';
import imageRight from '../../../assets/images/hero/imageRight.png';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef(null);
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.refresh();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=1000',
        scrub: 2,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.fromTo(leftImgRef.current, { y: 200 }, { y: -200, ease: 'none' }, 0);
    tl.fromTo(rightImgRef.current, { y: -200 }, { y: 200, ease: 'none' }, 0);

    gsap.to(leftImgRef.current, {
      yPercent: 5,
      rotation: 5,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
    });

    gsap.to(rightImgRef.current, {
      yPercent: -5,
      rotation: -5,
      duration: 2.5,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
    });
  }, []);

  return (
    <section className="hero-section" ref={sectionRef}>
      <img
        ref={leftImgRef}
        src={imageLeft}
        alt="Floating Left"
        className="floating-img left-img"
      />

      <div className="hero-text">
       <BlurText text="Have it all -" tag="h1" className="hero-heading" delay={30}/>
<BlurText
  text=" Glowing skin is just the beginning. Feel good, look great, live radiant."
  tag="h1"
  className="hero-subtext"
  delay={30}
/>

      </div>

      <img
        ref={rightImgRef}
        src={imageRight}
        alt="Floating Right"
        className="floating-img right-img"
      />
    </section>
  );
};

export default HeroSection;
