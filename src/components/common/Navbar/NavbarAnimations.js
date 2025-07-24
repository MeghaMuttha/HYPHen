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

    // Safety check
    if (!navRef?.current || !logoRef?.current || !menuItemsRef?.current) return;

    this.tl.fromTo(navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: durations.normal, ease: easings.smooth }
    )
    .fromTo(logoRef.current,
      {
        position: "absolute",
        left: "50%",
        top: "50%",
        xPercent: -50,
        yPercent: -50,
        scale: 2,
        opacity: 0,
        zIndex: 1000
      },
      {
        scale: 1,
        opacity: 1,
        duration: durations.normal,
        ease: easings.back,
        clearProps: "position,left,top,xPercent,yPercent,transform"
      },
      "-=0.5"
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

  // Scroll animation for background
  scrollAnimation(isScrolled) {
    const { navRef } = this.refs;
    if (!navRef?.current) return;

    gsap.to(navRef.current, {
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 1)',
      backdropFilter: isScrolled ? 'blur(10px)' : 'blur(0px)',
      boxShadow: isScrolled
        ? '0 2px 20px rgba(0, 0, 0, 0.1)'
        : '0 2px 10px rgba(0, 0, 0, 0.05)',
      duration: durations.fast,
      ease: easings.smooth
    });
  }

  // Mobile menu open/close animation
  mobileMenuAnimation(isOpen, mobileMenuRef) {
    if (!mobileMenuRef?.current) return;

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

  // Hover animation for menu items
  menuItemHover(item, isEntering) {
    if (!item) return;

    gsap.to(item, {
      scale: isEntering ? 1.05 : 1,
      color: isEntering ? '#2563eb' : '#1f2937',
      duration: durations.fast,
      ease: easings.smooth
    });
  }

  // Hover animation for logo
  logoHover(isEntering) {
    const { logoRef } = this.refs;
    if (!logoRef?.current) return;

    gsap.to(logoRef.current, {
      scale: isEntering ? 1.1 : 1,
      rotation: isEntering ? 5 : 0,
      duration: durations.fast,
      ease: easings.smooth
    });
  }

  // Active state glow effect
  activeStateAnimation(item) {
    if (!item) return;

    gsap.to(item, {
      textShadow: '0 0 10px rgba(37, 99, 235, 0.3)',
      duration: durations.fast,
      ease: easings.smooth
    });
  }

  // Cleanup method
  cleanup() {
    this.tl.kill();
  }
}
