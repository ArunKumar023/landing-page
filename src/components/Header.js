import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1>Multibrains</h1>
        <nav className="nav-center">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
          <i className="fas fa-search search-icon"></i>
        </nav>
        <div className="auth-buttons">
          <a href="#" className="sign-in">Sign In</a>
          <button className="hover-btn">Sign Up</button>
        </div>
        <i className="fas fa-search mobile-search-icon"></i>
        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>
      </div>
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <nav className="mobile-nav">
          <a href="#home" onClick={toggleMenu}>Home</a>
          <a href="#features" onClick={toggleMenu}>Features</a>
          <a href="#blog" onClick={toggleMenu}>Blog</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </nav>
        <div className="mobile-auth-buttons">
          <a href="#" className="sign-in" onClick={toggleMenu}>Sign In</a>
          <button className="hover-btn" onClick={toggleMenu}>Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;