import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WhyChooseUs.css';



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
   
// Fade out images before expanding circle
// fullTimeline.to(imageRefs.current, {
//   opacity: 0,
//   duration: 0.5,
//   stagger: 0.1
// }, '+=0.5');

  // 2️⃣ Circle expands **after** image animation completes
  // fullTimeline.to(circleRef.current, {
  //   scale: 15,
  //   ease: "power2.inOut",
  //   duration: 1.5,
  // }, '+=0.5'); // delay after image anim


 }, []);

return (
    <>
      <section className="discover-section" ref={containerRef}>
        <div className="center-content">
          <div className="pulse-circle"></div>
          <h3 className="central-text">
            Gentle care for tired skin.<br />
            Soothe, soften, and strengthen.<br />
            Because self-care isn’t selfish — it’s essential.
          </h3>
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
