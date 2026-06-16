import { useState, useEffect, useRef } from 'react';
import { projects, categories } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function ProjectGrid() {
  const [active, setActive] = useState('All');
  const gridRef = useRef(null);

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  useEffect(() => {
    if (!gridRef.current) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.08 });

    const cards = gridRef.current.querySelectorAll('.reveal');
    cards.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, [filtered]);

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Work</p>
          <h2>Projects & Creations</h2>
        </div>
        <div className="filter-bar">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn${active === cat ? ' active' : ''}`}
              onClick={() => setActive(cat)}
            >
              <span>{cat}</span>
            </button>
          ))}
        </div>
        <div className="project-grid" ref={gridRef}>
          {filtered.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
