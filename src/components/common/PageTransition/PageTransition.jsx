import { useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '../../../hooks/useGSAP';
import './PageTransition.css';

const PageTransition = ({ children, trigger }) => {
  const containerRef = useGSAP(() => {
    const tl = gsap.timeline();
    
    // Page exit animation
    tl.to('.page-transition-overlay', {
      scaleX: 1,
      duration: 0.5,
      ease: 'power2.inOut',
      transformOrigin: 'left'
    });
    
    // Page enter animation
    tl.to('.page-transition-overlay', {
      scaleX: 0,
      duration: 0.5,
      ease: 'power2.inOut',
      transformOrigin: 'right'
    });

    return tl;
  }, [trigger]);

  return (
    <div ref={containerRef} className="page-transition-container">
      <div className="page-transition-overlay"></div>
      {children}
    </div>
  );
};

export default PageTransition;