import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    { name: 'Freddy Smith', role: 'CEO & Founder', img: 'https://placehold.co/150x150?text=Freddy' },
    { name: 'Carl Jones', role: 'CTO & Co-Founder', img: 'https://placehold.co/150x150?text=Carl' },
    { name: 'Susan Peterson', role: 'Marketing Director', img: 'https://placehold.co/150x150?text=Susan' },
    { name: 'Tommy Barnes', role: 'Designer', img: 'https://placehold.co/150x150?text=Tommy' },
    { name: 'Ron Jensen', role: 'Senior Developer', img: 'https://placehold.co/150x150?text=Ron' },
    { name: 'Pete Tompkins', role: 'Web Developer', img: 'https://placehold.co/150x150?text=Pete' },
    { name: 'Kelly Richards', role: 'Sales Manager', img: 'https://placehold.co/150x150?text=Kelly' },
    { name: 'Alexis Jordan', role: 'Affiliate Manager', img: 'https://placehold.co/150x150?text=Alexis' },
  ];

  return (
    <section className="team">
      <div className="team-header">
        <div className="team-text">
          <a href="#" className="team-link">OUR TEAM</a>
          <p>
            An incredible team<br />of amazing individuals
          </p>
        </div>
      </div>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member hover-scale">
            <div className="image-wrapper">
              <img src={member.img} alt={member.name} />
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;