import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    id: 1,
    title: 'Metropolitan Tower Complex',
    category: 'Construction',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&q=80',
    description: 'High-rise commercial complex with modern architecture'
  },
  {
    id: 2,
    title: 'Highway Infrastructure Project',
    category: 'Construction',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    description: 'Major highway expansion and reconstruction'
  },
  {
    id: 3,
    title: 'Sustainable Quarry Operations',
    category: 'Quarrying',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    description: 'Eco-friendly material extraction facility'
  },
  {
    id: 4,
    title: 'Residential Development',
    category: 'Construction',
    image: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=800&q=80',
    description: 'Modern residential community with 500+ units'
  },
  {
    id: 5,
    title: 'Industrial Consultation',
    category: 'Consultation',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    description: 'Strategic planning for large-scale industrial facility'
  },
  {
    id: 6,
    title: 'Retail Shopping Center',
    category: 'Construction',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&q=80',
    description: 'Premium shopping destination with 200,000 sqft'
  }
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <h2>Recent Projects</h2>
          <p>Showcasing our expertise across various sectors</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span className="project-category">{project.category}</span>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href="#" className="project-link">View Details →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
