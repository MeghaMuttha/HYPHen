import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WhyChooseUs.css';
import {TextType } from '../../animations/TextType/TextType.jsx'


import img1 from '../../../assets/images/discover/img1.jpg';
import img2 from '../../../assets/images/discover/img2.jpg';
import img3 from '../../../assets/images/discover/img3.jpg';
import img4 from '../../../assets/images/discover/img4.jpg';
import img5 from '../../../assets/images/discover/img5.jpg';
import fly from '../../../assets/images/hero/fly.png'

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const containerRef = useRef(null);
  const imageRefs = useRef([]);
  const circleRef = useRef(null);
  const nextSectionRef = useRef(null);
  const movingImageRef = useRef(null);


useEffect(() => {
  const radius = 300;

  // Set initial positions
  gsap.set(imageRefs.current, {
    opacity: 0,
    x: 0,
    y: 0,
    scale: 0.8,
  });

  // Pin the full section for long scroll space
  const fullTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.current,
      start: 'top top',
      end: '+=2000', // longer scroll
      scrub: true,
      pin: true,
    }
  });

  // 1️⃣ Animate 5 floating images in circular path
  imageRefs.current.forEach((img, i) => {
    const angle = i * (360 / 5) * (Math.PI / 180);
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    fullTimeline.to(img, {
      x,
      y,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
    }, i * 0.2);
  });
   



 }, []);

return (
    <>
      <section className="discover-section" ref={containerRef}>
        <div className="center-content">
          <div className="pulse-circle"></div>
        <TextType 
  text={[
    "Gentle care for tired skin.",
    "Soothe, soften, and strengthen.",
    "Because self-care isn’t selfish — it’s essential."
  ]}
  typingSpeed={60}
  deletingSpeed={30}
  pauseDuration={2000}
  className="central-text"
  as="h3"
  showCursor={true}
  cursorCharacter="|"
  startOnVisible={false}   // 🟢 Animate on load
  loop={true}
/>



        </div>

        <div className="discover-image-wrapper">
          {[img1, img2, img3, img4, img5].map((img, index) => (
            <img
              key={index}
              ref={el => imageRefs.current[index] = el}
              src={img}
              alt={`img-${index}`}
              className="discover-img"
            />
          ))}
        </div>

{/* <div className="transition-circle" ref={circleRef}>

</div> */}





      </section>

   



    </>
  );
};

export default WhyChooseUs;
