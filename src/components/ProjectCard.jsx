import { useRef } from 'react';

const CAT_COLORS = {
  Software: ['#5b8df5', '#a78bfa'],
  Mobile:   ['#f472b6', '#fb923c'],
  Systems:  ['#22c55e', '#06b6d4'],
  Data:     ['#f59e0b', '#f97316'],
  Graphics: ['#a78bfa', '#ec4899'],
};

export default function ProjectCard({ project, index = 0 }) {
  const { title, category, description, tags, link, repo, featured } = project;
  const delay = index % 6;
  const cardRef = useRef(null);
  const [c1, c2] = CAT_COLORS[category] || CAT_COLORS.Software;

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(700px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-6px) scale(1.02)`;
    card.style.transition = 'box-shadow 0.15s, border-color 0.25s';
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = '';
    card.style.transition = 'transform 0.45s cubic-bezier(.22,.68,0,1.2), box-shadow 0.25s, border-color 0.25s';
  };

  return (
    <article
      ref={cardRef}
      className={`project-card reveal reveal-delay-${delay + 1}${featured ? ' featured' : ''}`}
      data-cat={category}
      style={{ '--c1': c1, '--c2': c2 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {featured && <div className="card-border-glow" />}
      <div className="card-shine" />
      <div className="card-accent-bar" />

      <div className="card-header-glow" />

      <div className="card-top">
        <span className="card-category" style={{ background: `${c1}18`, color: c1, borderColor: `${c1}30` }}>
          {category}
        </span>
        {featured && <span className="featured-badge">★ Featured</span>}
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{description}</p>
      <div className="card-tags">
        {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
      </div>
      <div className="card-links">
        {link && link !== '#' && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M1 11L11 1M11 1H5M11 1v6"/>
            </svg>
            Live demo
          </a>
        )}
        {repo && repo !== '#' && (
          <a href={repo} target="_blank" rel="noopener noreferrer" className="card-link">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M6 1C3.24 1 1 3.24 1 6c0 2.21 1.43 4.09 3.41 4.75.25.05.34-.11.34-.24v-.85c-1.39.3-1.68-.67-1.68-.67-.23-.58-.56-.73-.56-.73-.46-.31.03-.31.03-.31.5.04.77.52.77.52.45.77 1.18.55 1.47.42.04-.33.18-.55.32-.68-1.11-.13-2.28-.56-2.28-2.48 0-.55.19-1 .52-1.35-.05-.13-.22-.64.05-1.33 0 0 .42-.14 1.38.52A4.8 4.8 0 0 1 6 3.8c.43 0 .86.06 1.26.17.96-.66 1.38-.52 1.38-.52.27.69.1 1.2.05 1.33.33.35.52.8.52 1.35 0 1.93-1.17 2.35-2.29 2.47.18.16.34.46.34.93v1.38c0 .13.09.29.34.24A5.01 5.01 0 0 0 11 6c0-2.76-2.24-5-5-5z"/>
            </svg>
            Source
          </a>
        )}
        {(!link || link === '#') && (!repo || repo === '#') && (
          <span className="card-link" style={{ opacity: 0.3, cursor: 'default', border: 'none', background: 'none' }}>Private / Coming soon</span>
        )}
      </div>
    </article>
  );
}
