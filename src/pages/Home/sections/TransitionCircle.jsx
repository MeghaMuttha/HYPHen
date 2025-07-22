import React from 'react'
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './TransitionCircle.css';
import { CircularText } from '../../animations/CircularText/CircularText';

import imageLeft from '../../../assets/images/hero/fly.png';
import heroImage from '../../../assets/images/hero/Gif1.gif';

gsap.registerPlugin(ScrollTrigger);
const TransitionCircle = () => {

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
        scrub:2,
        pin: true,
        anticipatePin: 1,
      }
    });

   tl.fromTo(leftImgRef.current,
      { y: 200 },
      { y: -200, ease: 'none' },
      0
    );
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
          <img
            ref={leftImgRef}
            src={imageLeft}
            alt="Floating Left"
            className="third-img"
          />
        <div className='text '>
           
        </div>
          
  
<CircularText
  text="HAVE-IT-ALL*"
  onHover="speedUp"
  spinDuration={20}
  className="custom-class"
/>
           
    </section>
  )
}

export default TransitionCircle
