import React from 'react';
import './Productivity.css';

const Productivity = () => {
  return (
    <section className="productivity">
      <div className="productivity-content">
      <img src="https://placehold.co/400x300?text=Boost+Productivity" alt="Boost Productivity" className="hover-scale" />
        <div className="productivity-text">
          <h2>Boost Productivity</h2>
          <p>Build an atmosphere that creates productivity in your organization and your company culture.</p>
          <ul>
            <li><i className="fas fa-check"></i> Maximize productivity and growth</li>
            <li><i className="fas fa-check"></i> Speed past your competition</li>
            <li><i className="fas fa-check"></i> Learn the top techniques</li>
          </ul>
        </div>
      </div>

      <div className="productivity-content">
        <div className="productivity-text">
          <h2>Automated Tasks</h2>
          <p>Save time and money with our revolutionary services. We are the leaders in the industry.</p>
          <ul>
            <li><i className="fas fa-check"></i> Automated task management workflow</li>
            <li><i className="fas fa-check"></i> Detailed analytics for your data</li>
            <li><i className="fas fa-check"></i> Some awesome integrations</li>
          </ul>
        </div>
        <img src="https://placehold.co/400x300?text=Automated+Tasks" alt="Automated Tasks" className="hover-scale" />
      </div>
    </section>
  );
};

export default Productivity;