import React from 'react';
import './TrustedBy.css';

const TrustedBy = () => {
  return (
    <section className="trusted-by">
      <p>TRUSTED BY TOP-LEADING COMPANIES</p>
      <div className="logos">
        <img src="https://placehold.co/100x40?text=Disney" alt="Disney" className="hover-scale" />
        <img src="https://placehold.co/100x40?text=Google" alt="Google" className="hover-scale" />
        <img src="https://placehold.co/100x40?text=HubSpot" alt="HubSpot" className="hover-scale" />
        <img src="https://placehold.co/100x40?text=YouTube" alt="YouTube" className="hover-scale" />
        <img src="https://placehold.co/100x40?text=Slack" alt="Slack" className="hover-scale" />
        <img src="https://placehold.co/100x40?text=Shopify" alt="Shopify" className="hover-scale" />
      </div>
    </section>
  );
};

export default TrustedBy;