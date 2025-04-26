import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="links">
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">Team</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
        <a href="#">Terms</a>
      </div>
      {/* Add social media icons */}
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-dribbble"></i>
        </a>
      </div>
      <p>© 2021 SomeCompany Inc. All rights reserved.</p>
    </footer>
  );
};

export default Footer;