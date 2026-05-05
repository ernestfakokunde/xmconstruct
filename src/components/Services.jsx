import React from 'react';
import '../styles/Services.css';

const services = [
  {
    id: 1,
    icon: '01',
    title: 'Consultation',
    description: 'Professional advice and strategic planning for your construction and development projects.',
    features: [
      'Project Assessment',
      'Budget Planning',
      'Timeline Development',
      'Risk Analysis'
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80'
  },
  {
    id: 2,
    icon: '02',
    title: 'Construction',
    description: 'High-quality construction services delivering excellence from foundation to completion.',
    features: [
      'Residential Building',
      'Commercial Projects',
      'Infrastructure',
      'Quality Assurance'
    ],
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&q=80'
  },
  {
    id: 3,
    icon: '03',
    title: 'Quarrying',
    description: 'Sustainable and efficient quarrying operations providing quality materials for construction.',
    features: [
      'Material Extraction',
      'Environmental Care',
      'Quality Materials',
      'Delivery Service'
    ],
    image: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=800&q=80'
  }
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive solutions for all your construction needs</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-content">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="features-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="checkmark">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="service-btn">Learn More →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
