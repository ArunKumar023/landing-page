import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <h1>Start Crafting Your<br />Next Great Idea</h1>
      <p>Simplifying the creation of landing pages, blog pages, application pages, and so much more!</p>
      <div className="button-container">
        <button className="hover-btn">
          Purchase Now
          <span className="price-tooltip">only $15/mo</span>
        </button>
      </div>
      <a href="#" className="learn-more">Learn More</a>
    </section>
  );
};

export default Hero;