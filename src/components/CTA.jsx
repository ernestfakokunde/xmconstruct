import React from 'react';
import '../styles/CTA.css';

export default function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="cta-content">
        <h2>Book a Free Consultation</h2>
        <p>Tell us about your project and our team will reach out within 24 hours.</p>
        <form className="cta-form">
          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="cta-name">Full Name</label>
              <input id="cta-name" type="text" placeholder="Your name" />
            </div>
            <div className="form-field">
              <label htmlFor="cta-company">Company</label>
              <input id="cta-company" type="text" placeholder="Company name" />
            </div>
            <div className="form-field">
              <label htmlFor="cta-email">Email</label>
              <input id="cta-email" type="email" placeholder="you@company.com" />
            </div>
            <div className="form-field">
              <label htmlFor="cta-phone">Phone</label>
              <input id="cta-phone" type="tel" placeholder="+1 (555) 000-0000" />
            </div>
            <div className="form-field">
              <label htmlFor="cta-service">Service</label>
              <select id="cta-service">
                <option>Consultation</option>
                <option>Construction</option>
                <option>Quarrying</option>
              </select>
            </div>
          </div>
          <div className="form-field full">
            <label htmlFor="cta-message">Project Details</label>
            <textarea id="cta-message" rows="4" placeholder="Share timelines, scope, and location"></textarea>
          </div>
          <div className="cta-actions">
            <button type="submit" className="btn btn-primary-white">Book Free Consultation</button>
            <button type="button" className="btn btn-secondary-white">Contact Sales</button>
          </div>
        </form>
      </div>
    </section>
  );
}
