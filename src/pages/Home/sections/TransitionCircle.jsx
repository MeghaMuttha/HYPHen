import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './TransitionCircle.css';
import { CircularText } from '../../animations/CircularText/CircularText';

import imageLeft from '../../../assets/images/hero/fly.png';

gsap.registerPlugin(ScrollTrigger);

const TransitionCircle = () => {
  const sectionRef = useRef(null);
  const leftImgRef = useRef(null);

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
      }
    });

    tl.fromTo(leftImgRef.current,
      { y: 200 },
      { y: -200, ease: 'none' },
      0
    );

    // Floating motion
    gsap.to(leftImgRef.current, {
      yPercent: 5,
      rotation: 5,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut'
    });
  }, []);

  return (
    <section className="third-section" ref={sectionRef}>
  <div className="third-content-wrapper">
    <img
      ref={leftImgRef}
      src={imageLeft}
      alt="Floating"
      className="third-img"
    />

    <div className="text">
      <h2 className="tagline">Feel the science. <br /> Love the results.</h2>
      <p className="subtext">Experience the synergy of nature and innovation.</p>
    </div>

    <CircularText
      text="HAVE-IT-ALL*"
      onHover="speedUp"
      spinDuration={20}
      className="circular-text"
    />
  </div>
</section>

  );
};

export default TransitionCircle;
