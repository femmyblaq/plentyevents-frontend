import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/register ">Join Us</Link></li>
          </ul>
        </div>

        <div className="footer-section support">
          <h4>Support</h4>
          <ul>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/help-center">Help Center</Link></li>
            <li><Link to="/how-it-works">How it Works</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div className="footer-section subscribe">
          <h4>Stay Connected</h4>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your Email Address" />
            <button type="submit">Subscribe</button>
          </form>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 PLENTYEVENTS. All rights reserved. | Built with <span role="img" aria-label="love">❤️</span> in Nigeria.</p>
      </div>
    </footer>
  );
};

export default Footer;
