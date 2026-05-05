import React from 'react';
import '../styles/About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Our Reputation is as Solid as Concrete</h2>
            <p className="about-subtitle">
              With over 20 years of industry experience, we've built a reputation for delivering exceptional results on time and within budget.
            </p>
            <p>
              Our team combines expertise in consultation, construction, and quarrying to provide comprehensive solutions. We prioritize quality, safety, and sustainability in every project we undertake.
            </p>
            <div className="about-stats">
              <div className="stat">
                <div className="stat-number">150+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat">
                <div className="stat-number">20+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-number">98%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=800&q=80" 
              alt="Construction team on site"
              className="team-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
