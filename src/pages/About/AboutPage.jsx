import { useEffect, useRef } from 'react';
import './AboutPage.css';
import aboutImg from '../../assets/images/about/about-image.jpg';
import { gsap } from 'gsap';
import heroImage from '../../assets/images/hero/heroImage.jpg'
import {BlurText} from '../animations/BlurText/BlurText.jsx'

const AboutPage = () => {
  const imgRef1 = useRef(null);
  const textRef1 = useRef(null);
  const imgRef2 = useRef(null);
  const textRef2 = useRef(null);

  useEffect(() => {
    // Section 1 animation: text from left, image from right
    gsap.fromTo(textRef1.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 2, ease: 'expo.inOut' });
    gsap.fromTo(imgRef1.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 2, delay: 0.3, ease: 'expo.inOut' });

    // Section 2 animation: image from left, text from right
    gsap.fromTo(imgRef2.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 2, delay: 0.6, ease: 'expo.inOut' });
    gsap.fromTo(textRef2.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 2, delay: 0.9, ease: 'expo.inOut' });
  }, []);

  return (
    <main className="about-main">
      {/* Section 1 - Text left, Image right */}
      <section className="about-section">
        <div className="about-half about-text" ref={textRef1}>
          <BlurText
  text="Our Story!"
   tag="h1"
  className="hero-subtext"
  delay={30}
/>
<BlurText
  text="The journey of Hyphen began when we discovered the challenges individuals face with the ever-growing options for addressing any skin concern, each helmed with different ingredients. Here, we hyphenate multiple ingredients to craft result-driven solutions catering to every Indian's skin concern. Nature's power and the potency of science come together in each bottle, offering an array of benefits and a touch of magic that elevates your skincare to a whole new level. Hyphen is fueled by our passion for skincare and a vision to build a brand that empowers you to HAVE IT ALL."
   tag="p"
  className="hero-subtext"
  delay={30}
/>
        </div>
        

        <div className="about-half about-img-wrapper" ref={imgRef1}>
          <img src={aboutImg} alt="Our Story" className="about-img" />
        </div>
      </section>

      {/* Section 2 - Image left, Text right */}
      <section className="about-section reverse">
        <div className="about-half about-text" ref={textRef2}>
         <BlurText
  text="The Hyphenated Essentials"
   tag="h1"
  className="hero-subtext"
  delay={90}
/>
<BlurText
  text="Streamline your daily skincare with our go-to must-haves - Barrier Care Face Creams, Golden Hour Glow Face Serum and All I Need Sunscreen SPF 50 PA++++. We have harnessed multiple ingredients and created power-packed solutions for every kind of skin concern. Combining the power of nature with the potency of science, each product offers a multitude of benefits and so much more, all bottled within. Additionally, our commitment to Clean, Vegan, and Sustainable values ensures a positive impact on both your skin and the planet."
   tag="p"
  className="hero-subtext"
  delay={100}
/>
        </div>
        <div className="about-half about-img-wrapper" ref={imgRef2}>
          <img src={heroImage} alt="Our Mission" className="about-img" />
        </div>
        
      </section>
    </main>
  );
};

export default AboutPage;
