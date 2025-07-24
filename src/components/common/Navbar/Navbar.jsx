import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { useGSAP } from '../../../hooks/useGSAP';
import { useResponsive } from '../../../hooks/useResponsive';
import HYPHenLogo from '../../../assets/images/icons/HYPHenlogo.png';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { isMobile } = useResponsive();

  const navRef = useRef(null);
  const logoRef = useRef(null);
  const menuItemsRef = useRef([]);
  const hamburgerRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' },
    { path: '/reviews', label: 'Reviews' },
    { path: '/founder', label: 'Founder' },
    { path: '/login', label: 'Login' },
  ];

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
    )
      .fromTo(
        logoRef.current,
        {
          position: 'absolute',
          left: '50%',
          top: '50%',
          xPercent: -50,
          yPercent: -50,
          scale: 2,
          opacity: 0,
          zIndex: 1000,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power4.out',
          clearProps: 'all',
        },
        '-=0.5'
      )
      .fromTo(
        menuItemsRef.current,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
        },
        '-=0.6'
      );
  }, []);

  useEffect(() => {
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const scrollDown = currentScrollY > lastScrollY;

    if (scrollDown && currentScrollY > 100) {
      // Hide navbar
      gsap.to(navRef.current, {
        y: '-100%',
        duration: 0.3,
        ease: 'power2.out',
      });
    } else {
      // Show navbar
      gsap.to(navRef.current, {
        y: '0%',
        duration: 0.3,
        ease: 'power2.out',
      });
    }

    // Update scroll position
    lastScrollY = currentScrollY;
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    if (!isMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        x: 0,
        duration: 0.5,
        ease: 'power2.out',
      });

      gsap.fromTo(
        mobileMenuRef.current.children,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
          stagger: 0.1,
          delay: 0.2,
          ease: 'power2.out',
        }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        x: '100%',
        duration: 0.5,
        ease: 'power2.in',
      });
    }
  };

  const handleMenuItemHover = (index, isEntering) => {
    const item = menuItemsRef.current[index];
    if (!item) return;

    gsap.to(item, {
      scale: isEntering ? 1.05 : 1,
      color: isEntering ? '#2563eb' : '#1f2937',
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleLogoHover = (isEntering) => {
    gsap.to(logoRef.current, {
      scale: isEntering ? 1.1 : 1,
      rotation: isEntering ? 5 : 0,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  return (
    <nav ref={navRef} className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link
          to="/"
          className="navbar-logo"
          onMouseEnter={() => handleLogoHover(true)}
          onMouseLeave={() => handleLogoHover(false)}
        >
          <div className="logo-wrapper">
            <img ref={logoRef} src={HYPHenLogo} alt="Logo" className="logo-image" />
            <img src={HYPHenLogo} alt="Logo Clone" className="logo-clone" aria-hidden="true" />
          </div>
        </Link>

        <div className="navbar-menu desktop-menu">
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              ref={(el) => (menuItemsRef.current[index] = el)}
              className={`navbar-item ${location.pathname === item.path ? 'active' : ''}`}
              onMouseEnter={() => handleMenuItemHover(index, true)}
              onMouseLeave={() => handleMenuItemHover(index, false)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div
          ref={hamburgerRef}
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div ref={mobileMenuRef} className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
         {navItems.map((item, index) => (
  <Link
    key={item.path}
    to={item.path}
    className={`mobile-menu-item ${location.pathname === item.path ? 'active' : ''}`}
    onClick={() => {
      setIsMenuOpen(false); // ✅ Close menu on click

      // ✅ Animate the menu sliding out
      gsap.to(mobileMenuRef.current, {
        x: '100%',
        duration: 0.5,
        ease: 'power2.in',
      });
    }}
  >
    {item.label}
  </Link>
))}

        </div>

        {isMenuOpen && <div className="mobile-menu-overlay" onClick={() => setIsMenuOpen(false)} />}
      </div>
    </nav>
  );
};

export default Navbar;
