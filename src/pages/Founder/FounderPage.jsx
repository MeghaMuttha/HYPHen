import { useEffect, useRef } from 'react';
import './FounderPage.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import f1 from '../../assets/images/founder/kriti-sanon.jpg'
import f2 from '../../assets/images/founder/tarun-sharma.jpg'
import f3 from '../../assets/images/founder/vaishali-gupta.jpg'
import f4 from '../../assets/images/founder/vikas-lachwani_1.jpg'
import f5 from '../../assets/images/founder/saurabh_1.jpg'
import f6 from '../../assets/images/founder/Mohit-jain_1.jpg'

// Register plugin
gsap.registerPlugin(ScrollTrigger);

const founders = [
  {
    name: "KRITI SANON",
    role: "Co-Founder & Chief Customer Officer",
    img: f1,
   
  },
  {
    name: "TARUN SHARMA",
    role: "Co-Founder & CEO",
    img: f2,
    
  },
  {
    name: "VAISHALI GUPTA ",
    role: "Co-Founder & Chief Growth Officer",
    img: f3,
   
  },
  {
    name: "VIKAS LACHHWANI",
    role: "Co-Founder & Chief Innovation Officer",
    img: f4,
   
  },
  {
    name: "SAURABH SINGHAL",
    role: "Co-Founder & Chief Supply Officer",
    img:f5,
    
  },
  {
    name: "MOHIT JAIN",
    role: "Creative DirectoCo-Founder & Head of Finance",
    img: f6
   
  },
];

const FounderPage = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <section className="founders-section">
      <h2 className="founders-heading">--------The Brains. The Bold. The Builders.--------</h2>
      <div className="founders-grid">
        {founders.map((founder, index) => (
          <div
            className="founder-card"
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <img src={founder.img} alt={founder.name} className="founder-image" />
            <h3>{founder.name}</h3>
            <p className="founder-role">{founder.role}</p>
            <p className="founder-bio">{founder.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FounderPage;
