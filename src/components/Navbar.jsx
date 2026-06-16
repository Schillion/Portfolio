import { useEffect, useState } from 'react';
import { about } from '../data/projects';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const initials = about.name.split(' ').map(n => n[0]).join('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <a href="#" className="nav-logo">
          {initials}<span>.</span>
        </a>
        <ul className="nav-links">
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href={`mailto:${about.email}`} className="btn btn-primary" style={{ fontSize: '0.82rem', padding: '8px 16px' }}>
          Get in touch
        </a>
      </div>
    </nav>
  );
}
