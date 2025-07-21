import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { useGSAP } from '../../../hooks/useGSAP';
import { useResponsive } from '../../../hooks/useResponsive';
import HYPHenLogo from '../../../assets/images/icons/HYPHenlogo.png'
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { isMobile } = useResponsive();
  
  // Refs for animations
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const menuItemsRef = useRef([]);
  const hamburgerRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Navigation items
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' },
    { path: '/reviews', label: 'Reviews' },
    { path: '/founder', label: 'Founder' },
    { path: '/login', label: 'Login' }
  ];

  // GSAP animations
  const containerRef = useGSAP(() => {
    const tl = gsap.timeline();

    // Initial navbar animation
    tl.fromTo(navRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );

 tl.fromTo(logoRef.current,
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
      duration: 1,
      ease: "power4.out",
      clearProps: "all"
    },
    "-=0.5" // start 0.5s before nav finishes
  );

  // Animate menu items (stagger)
  tl.fromTo(menuItemsRef.current,
    { opacity: 0, y: -20 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out"
    },
    "-=0.6" // overlap with logo animation
  );

  return tl;
}, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 50);
      
      // Animate navbar background
      gsap.to(navRef.current, {
        backgroundColor: scrollTop > 50 ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 1)',
        backdropFilter: scrollTop > 50 ? 'blur(10px)' : 'blur(0px)',
        boxShadow: scrollTop > 50 ? '0 2px 20px rgba(0, 0, 0, 0.1)' : '0 2px 10px rgba(0, 0, 0, 0.05)',
        duration: 0.3,
        ease: "power2.out"
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
    if (!isMenuOpen) {
      // Open animation
      gsap.to(mobileMenuRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power2.out"
      });
      
      gsap.fromTo(mobileMenuRef.current.children,
        { opacity: 0, x: 50 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.3,
          stagger: 0.1,
          delay: 0.2,
          ease: "power2.out"
        }
      );
    } else {
      // Close animation
      gsap.to(mobileMenuRef.current, {
        x: '100%',
        duration: 0.5,
        ease: "power2.in"
      });
    }
  };

  // Menu item hover animations
  const handleMenuItemHover = (index, isEntering) => {
    const item = menuItemsRef.current[index];
    if (!item) return;

    if (isEntering) {
      gsap.to(item, {
        scale: 1.05,
        color: '#2563eb',
        duration: 0.3,
        ease: "power2.out"
      });
    } else {
      gsap.to(item, {
        scale: 1,
        color: '#1f2937',
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  // Logo hover animation
  const handleLogoHover = (isEntering) => {
    if (isEntering) {
      gsap.to(logoRef.current, {
        scale: 1.1,
        rotation: 5,
        duration: 0.3,
        ease: "power2.out"
      });
    } else {
      gsap.to(logoRef.current, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  return (
    <nav 
      ref={navRef}
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="navbar-container">
        {/* Logo */}
        <Link 
  to="/" 
  className="navbar-logo"
  onMouseEnter={() => handleLogoHover(true)}
  onMouseLeave={() => handleLogoHover(false)}
>
  <div className="logo-wrapper">
  <img
    ref={logoRef}
    src={HYPHenLogo}
    alt="Logo"
    className="logo-image"
  />
  <img
    src={HYPHenLogo}
    alt="Logo Clone"
    className="logo-clone"
    aria-hidden="true"
  />
</div>

</Link>

        {/* Desktop Menu */}
        <div className="navbar-menu desktop-menu">
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              ref={el => menuItemsRef.current[index] = el}
              className={`navbar-item ${location.pathname === item.path ? 'active' : ''}`}
              onMouseEnter={() => handleMenuItemHover(index, true)}
              onMouseLeave={() => handleMenuItemHover(index, false)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Hamburger Menu */}
        <div 
          ref={hamburgerRef}
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Mobile Menu */}
        <div 
          ref={mobileMenuRef}
          className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}
        >
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              className={`mobile-menu-item ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            className="mobile-menu-overlay"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;