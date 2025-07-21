import { gsap } from 'gsap';
import { easings, durations } from '../gsapConfig';

// Fade in animation
export const fadeIn = (element, options = {}) => {
  return gsap.fromTo(element, 
    { opacity: 0, y: 50 },
    { 
      opacity: 1, 
      y: 0, 
      duration: durations.normal,
      ease: easings.smooth,
      ...options 
    }
  );
};

// Slide up animation
export const slideUp = (element, options = {}) => {
  return gsap.fromTo(element,
    { y: 100, opacity: 0 },
    { 
      y: 0, 
      opacity: 1, 
      duration: durations.normal,
      ease: easings.smooth,
      ...options 
    }
  );
};

// Scale in animation
export const scaleIn = (element, options = {}) => {
  return gsap.fromTo(element,
    { scale: 0.8, opacity: 0 },
    { 
      scale: 1, 
      opacity: 1, 
      duration: durations.normal,
      ease: easings.back,
      ...options 
    }
  );
};

// Stagger animation
export const staggerIn = (elements, options = {}) => {
  return gsap.fromTo(elements,
    { opacity: 0, y: 50 },
    { 
      opacity: 1, 
      y: 0, 
      duration: durations.normal,
      ease: easings.smooth,
      stagger: 0.1,
      ...options 
    }
  );
};

// Text reveal animation
export const textReveal = (element, options = {}) => {
  return gsap.fromTo(element,
    { opacity: 0, y: 20 },
    { 
      opacity: 1, 
      y: 0, 
      duration: durations.normal,
      ease: easings.smooth,
      ...options 
    }
  );
};

// Hover animations
export const hoverScale = (element, scale = 1.05) => {
  const tl = gsap.timeline({ paused: true });
  tl.to(element, { scale, duration: 0.3, ease: easings.smooth });
  return tl;
};

export const hoverFloat = (element, y = -10) => {
  const tl = gsap.timeline({ paused: true });
  tl.to(element, { y, duration: 0.3, ease: easings.smooth });
  return tl;
};