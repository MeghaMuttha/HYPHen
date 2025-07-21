import './Footer.css';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-section">
          <h4>About Hyphen</h4>
          <ul className="footer-points">
            <li>Clinically Tested</li>
            <li>Peta Certified</li>
            <li>100% Vegan</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About Us</a></li>
            <li>Contact:mutthamegha8@gmail.com</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="https://letshyphen.com/pages/faq">FAQs</a></li>
            <li><a href="https://letshyphen.com/pages/privacy-policy">Privacy Policy</a></li>
            <li><a href="https://letshyphen.com/pages/terms-conditions">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="footer-section">
  <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com/letshyphen/?hl=en"><FaInstagram /></a>
            <a href="https://www.facebook.com/letshyphen/"><FaFacebookF /></a>
            <a href="https://x.com/letshyphen?t=O4LCJdlAQmP78XJGHf3mUA&s=09"><FaTwitter /></a>
            <a href="https://www.youtube.com/@letshyphen"><FaYoutube /></a>
          </div>
</div>
      </div>
 

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Hyphen. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
