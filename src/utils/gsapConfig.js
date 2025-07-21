import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { Observer } from 'gsap/Observer';

// Register plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin, Observer);

// Global GSAP configuration
gsap.config({
  nullTargetWarn: false,
  trialWarn: false
});

// Default animation settings
gsap.defaults({
  duration: 1,
  ease: "power2.out"
});

// Common easing functions
export const easings = {
  smooth: "power2.out",
  bounce: "bounce.out",
  elastic: "elastic.out(1, 0.3)",
  back: "back.out(1.7)",
  expo: "expo.out",
  circ: "circ.out",
  sine: "sine.out"
};

// Animation durations
export const durations = {
  fast: 0.3,
  normal: 0.6,
  slow: 1.2,
  slower: 1.8
};

// Common animation presets
export const presets = {
  fadeIn: {
    opacity: 0,
    y: 50,
    duration: durations.normal,
    ease: easings.smooth
  },
  slideUp: {
    y: 100,
    opacity: 0,
    duration: durations.normal,
    ease: easings.smooth
  },
  scaleIn: {
    scale: 0.8,
    opacity: 0,
    duration: durations.normal,
    ease: easings.back
  }
};

// Responsive breakpoints
export const breakpoints = {
  mobile: '(max-width: 768px)',
  tablet: '(max-width: 1024px)',
  desktop: '(min-width: 1025px)'
};

export default gsap;