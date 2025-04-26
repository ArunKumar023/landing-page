import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Productivity from './components/Productivity';
import Features from './components/Features';
import Team from './components/Team';
import Blog from './components/Blog';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  useEffect(() => {
    const nav = document.querySelector('nav');
    if (!nav) {
      console.error('Nav element not found');
      return;
    }

    const handleNavClick = (e) => {
      if (e.target.matches('nav a[href^="#"]')) {
        e.preventDefault();
        e.stopPropagation();
        const targetId = e.target.getAttribute('href').replace('#', '');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, null, `#${targetId}`);
        }
        document.querySelectorAll('nav a[href^="#"]').forEach(l => l.classList.remove('active'));
        e.target.classList.add('active');
      }
    };

    nav.addEventListener('click', handleNavClick);

    const handleScroll = () => {
      let current = '';
      document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id');
        }
      });
      document.querySelectorAll('nav a[href^="#"]').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Set initial active state
    window.dispatchEvent(new Event('scroll'));

    return () => {
      nav.removeEventListener('click', handleNavClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <Header />
      
      <section id="home">
        <Hero />
      </section>

      <section id="trusted-by">
        <TrustedBy />
      </section>

      <section id="productivity">
        <Productivity />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="team">
        <Team />
      </section>

      <section id="blog">
        <Blog />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </div>
  );
};

export default App;