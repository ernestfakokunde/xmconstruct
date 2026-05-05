import React from 'react';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Building the Future, One Project at a Time</h1>
          <p className="hero-subtitle">
            Expert consultation, precision construction, and sustainable quarrying solutions for your most ambitious projects
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Start Your Project</button>
            <button className="btn btn-secondary">Call Now</button>
          </div>
          <div className="trust-badge">
            <span>✓ Trusted by 150+ Businesses</span>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" 
            alt="Construction professional on site"
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
}
