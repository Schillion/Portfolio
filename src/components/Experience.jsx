import { useInView } from '../hooks/useInView';

const experiences = [
  {
    company: 'OTis Philippines Inc.',
    role: 'Backend Developer Intern',
    period: 'Jun 23 – Jul 18, 2025',
    location: 'Remote',
    tags: ['Go', 'Docker', 'Nginx', 'Git', 'DDD', 'Hexagonal Architecture'],
    bullets: [
      'Refactored the infra/ layer of polytalk-liff-backend (a Go-based auth & service backend) to follow the Ports and Adapters pattern using Domain-Driven Design (DDD)',
      'Implemented modular boundaries across adapters/repos, adapters/services, and ports; migrated auth, lineauth, and gcpauth modules to the new architecture',
      'Managed Git submodule references in the parent polytalk repo; enforced code quality via golangci-lint pre-commit hooks and semantic versioning conventions',
      'Set up local development environments with Docker Compose, Nginx reverse proxy, and Cloudflare Tunnel',
    ],
  },
];

export default function Experience() {
  const [ref, inView] = useInView();

  return (
    <section id="experience">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Work History</p>
          <h2>Experience</h2>
        </div>

        <div className="exp-timeline" ref={ref}>
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`exp-item reveal${inView ? ' visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="exp-dot" />
              <div className="exp-card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-company">{exp.company}</h3>
                    <p className="exp-role">{exp.role}</p>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-period">{exp.period}</span>
                    <span className="exp-location">{exp.location}</span>
                  </div>
                </div>
                <ul className="exp-bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                <div className="exp-tags">
                  {exp.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
