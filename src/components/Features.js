import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    { icon: 'fas fa-shield-alt', title: 'Certificates', desc: 'Each of our plan will provide you and your team with certifications.' },
    { icon: 'fas fa-bell', title: 'Notifications', desc: 'Send out notifications to all your customers to keep them engaged.' },
    { icon: 'fas fa-box', title: 'Bundles', desc: 'High-quality bundles of tools to help you succeed.' },
    { icon: 'fas fa-code', title: 'Developer Tools', desc: 'Developer tools to help grow your application and keep it up-to-date.' },
    { icon: 'fas fa-cube', title: 'Building Blocks', desc: 'The right kind of building blocks to take your company to the next level.' },
    { icon: 'fas fa-ticket-alt', title: 'Coupons', desc: 'Coupons system to provide special offers and discounts for your app.' },
  ];

  return (
    <section className="features">
      <h2>Our Features</h2>
      <p>Check out our list of awesome features below.</p>
      <div className="feature-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card hover-scale">
            <i className={feature.icon}></i>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;