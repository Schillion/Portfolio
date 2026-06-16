import { useInView } from '../hooks/useInView';
import { skills } from '../data/projects';

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Expertise</p>
          <h2>Skills & Tools</h2>
        </div>
        <div className="skills-grid" ref={ref}>
          {skills.map((group, gi) => (
            <div
              key={group.category}
              className={`skill-group reveal reveal-delay-${gi + 1}${inView ? ' visible' : ''}`}
            >
              <h3>{group.category}</h3>
              <div className="skill-items">
                {group.items.map(item => (
                  <span key={item} className="skill-item">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
