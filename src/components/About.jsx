import { useInView } from '../hooks/useInView';
import { about } from '../data/projects';

export default function About() {
  const [leftRef, leftIn] = useInView();
  const [rightRef, rightIn] = useInView();

  return (
    <section id="about">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Background</p>
          <h2>About Me</h2>
        </div>
        <div className="about-grid">
          <div
            ref={leftRef}
            className={`about-text reveal${leftIn ? ' visible' : ''}`}
          >
            <p>{about.bio}</p>
            <p>
              Eager to contribute to industry projects, collaborate in team environments,
              and apply best practices in software engineering to solve real-world challenges.
              I'm interested in full-stack development, cybersecurity, AI/ML, systems analytics, and game development.
            </p>
            <div style={{ marginTop: '28px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href={`mailto:${about.email}`} className="btn btn-primary">Email me</a>
              <a href={about.social.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">LinkedIn</a>
              <a href={about.social.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Schilion</a>
              <a href={about.social.github2} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Schillion</a>
            </div>
          </div>
          <div
            ref={rightRef}
            className={`about-details reveal reveal-delay-2${rightIn ? ' visible' : ''}`}
          >
            <div className="detail-row">
              <span className="detail-label">Name</span>
              <span className="detail-value">{about.displayName}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Role</span>
              <span className="detail-value">{about.title}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Degree</span>
              <span className="detail-value">{about.education.degree}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">University</span>
              <span className="detail-value">{about.education.school}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Graduated</span>
              <span className="detail-value">2026</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Phone</span>
              <span className="detail-value">{about.phone}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Location</span>
              <span className="detail-value">Rodriguez, Rizal, PH</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Availability</span>
              <span className="detail-value" style={{ color: '#16a34a' }}>Open to work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
