import { gsap } from 'gsap';
import { easings, durations } from '../../../utils/gsapConfig';

export class NavbarAnimations {
  constructor(refs) {
    this.refs = refs;
    this.tl = gsap.timeline();
  }

  // Initial load animation
  initAnimation() {
    const { navRef, logoRef, menuItemsRef } = this.refs;

    this.tl.fromTo(navRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: durations.normal, ease: easings.smooth }
    )
    .fromTo(logoRef.current,
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, duration: durations.normal, ease: easings.back },
      "-=0.3"
    )
    .fromTo(menuItemsRef.current,
      { opacity: 0, y: -20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: durations.fast,
        stagger: 0.1,
        ease: easings.smooth
      },
      "-=0.4"
    );

    return this.tl;
  }

  // Scroll animations
  scrollAnimation(isScrolled) {
    const { navRef } = this.refs;
    
    gsap.to(navRef.current, {
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 1)',
      backdropFilter: isScrolled ? 'blur(10px)' : 'blur(0px)',
      boxShadow: isScrolled ? '0 2px 20px rgba(0, 0, 0, 0.1)' : '0 2px 10px rgba(0, 0, 0, 0.05)',
      duration: durations.fast,
      ease: easings.smooth
    });
  }

  // Mobile menu animations
  mobileMenuAnimation(isOpen, mobileMenuRef) {
    if (isOpen) {
      gsap.to(mobileMenuRef.current, {
        x: 0,
        duration: durations.normal,
        ease: easings.smooth
      });
      
      gsap.fromTo(mobileMenuRef.current.children,
        { opacity: 0, x: 50 },
        { 
          opacity: 1, 
          x: 0, 
          duration: durations.fast,
          stagger: 0.1,
          delay: 0.2,
          ease: easings.smooth
        }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        x: '100%',
        duration: durations.normal,
        ease: easings.smooth
      });
    }
  }

  // Hover animations
  menuItemHover(item, isEntering) {
    if (isEntering) {
      gsap.to(item, {
        scale: 1.05,
        color: '#2563eb',
        duration: durations.fast,
        ease: easings.smooth
      });
    } else {
      gsap.to(item, {
        scale: 1,
        color: '#1f2937',
        duration: durations.fast,
        ease: easings.smooth
      });
    }
  }

  logoHover(isEntering) {
    const { logoRef } = this.refs;
    
    if (isEntering) {
      gsap.to(logoRef.current, {
        scale: 1.1,
        rotation: 5,
        duration: durations.fast,
        ease: easings.smooth
      });
    } else {
      gsap.to(logoRef.current, {
        scale: 1,
        rotation: 0,
        duration: durations.fast,
        ease: easings.smooth
      });
    }
  }

  // Active state animation
  activeStateAnimation(item) {
    gsap.to(item, {
      textShadow: '0 0 10px rgba(37, 99, 235, 0.3)',
      duration: durations.fast,
      ease: easings.smooth
    });
  }

  // Cleanup
  cleanup() {
    this.tl.kill();
  }
}