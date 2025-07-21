import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useGSAP = (animationFunction, dependencies = []) => {
  const containerRef = useRef(null);
  const animationRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (animationFunction) {
        const animations = animationFunction();
        if (Array.isArray(animations)) {
          animationRef.current = animations;
        } else {
          animationRef.current = [animations];
        }
      }
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, dependencies);

  return containerRef;
};

export const useScrollTrigger = (animationFunction, dependencies = []) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (animationFunction) {
        animationFunction();
      }
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, dependencies);

  return containerRef;
};

export const useResponsiveGSAP = (animations, dependencies = []) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      
      // Mobile animations
      mm.add("(max-width: 768px)", () => {
        animations.mobile && animations.mobile();
      });
      
      // Tablet animations
      mm.add("(min-width: 769px) and (max-width: 1024px)", () => {
        animations.tablet && animations.tablet();
      });
      
      // Desktop animations
      mm.add("(min-width: 1025px)", () => {
        animations.desktop && animations.desktop();
      });

      return () => mm.revert();
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, dependencies);

  return containerRef;
};