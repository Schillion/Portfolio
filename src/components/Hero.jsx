import { useRef, useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';
import { useTypewriter } from '../hooks/useTypewriter';
import { about, projects } from '../data/projects';
import Marquee from './Marquee';

const ROLES = ['Full-Stack Developer', 'Mobile Developer', 'Systems Programmer', 'Game Developer', 'Backend Engineer', 'Open to Work'];

function StatItem({ value, suffix = '+', label, active }) {
  const count = useCountUp(value, 1200, active);
  return (
    <div className="stat-item">
      <div className="stat-value">{count}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function TerminalWidget() {
  return (
    <div className="hero-terminal" aria-hidden="true">
      <div className="terminal-titlebar">
        <div className="terminal-dots">
          <span className="tdot tdot-red" />
          <span className="tdot tdot-yellow" />
          <span className="tdot tdot-green" />
        </div>
        <span className="terminal-filename">tim.json</span>
        <div style={{ flex: 1 }} />
      </div>
      <pre className="terminal-body">
        <span className="t-brace">{'{'}</span>{'\n'}
        <span className="t-line" style={{ '--d': '0.7s' }}>
          {'  '}<span className="t-key">"name"</span><span className="t-col">: </span><span className="t-str">"Tim Clemente"</span><span className="t-punc">,</span>
        </span>{'\n'}
        <span className="t-line" style={{ '--d': '0.85s' }}>
          {'  '}<span className="t-key">"role"</span><span className="t-col">: </span><span className="t-str">"Full-Stack Developer"</span><span className="t-punc">,</span>
        </span>{'\n'}
        <span className="t-line" style={{ '--d': '1.0s' }}>
          {'  '}<span className="t-key">"university"</span><span className="t-col">: </span><span className="t-str">"UPLB BSCS '26"</span><span className="t-punc">,</span>
        </span>{'\n'}
        <span className="t-line" style={{ '--d': '1.15s' }}>
          {'  '}<span className="t-key">"location"</span><span className="t-col">: </span><span className="t-str">"Philippines 🇵🇭"</span><span className="t-punc">,</span>
        </span>{'\n'}
        <span className="t-line" style={{ '--d': '1.3s' }}>
          {'  '}<span className="t-key">"openToWork"</span><span className="t-col">: </span><span className="t-bool">true</span><span className="t-punc">,</span>
        </span>{'\n'}
        <span className="t-line" style={{ '--d': '1.45s' }}>
          {'  '}<span className="t-key">"stack"</span><span className="t-col">: </span><span className="t-bracket">[</span><span className="t-str">"React"</span><span className="t-punc">, </span><span className="t-str">"Node"</span><span className="t-punc">, </span><span className="t-str">"Python"</span><span className="t-punc">, </span><span className="t-str">"C"</span><span className="t-bracket">]</span>
        </span>{'\n'}
        <span className="t-brace">{'}'}</span>
      </pre>
      <div className="terminal-glow" />
    </div>
  );
}

export default function Hero() {
  const [statsRef, statsVisible] = useInView();
  const glowRef = useRef(null);
  const sectionRef = useRef(null);
  const typed = useTypewriter(ROLES, 70, 35, 1800);
  const disciplines = [...new Set(projects.map(p => p.category))].length;

  useEffect(() => {
    const section = sectionRef.current;
    const glow = glowRef.current;
    if (!section || !glow) return;
    const onMove = (e) => {
      const rect = section.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      glow.style.transform = `translate(${(x - 0.5) * 60}px, ${(y - 0.5) * 60}px)`;
    };
    section.addEventListener('mousemove', onMove, { passive: true });
    return () => section.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section className="hero" ref={sectionRef}>
      <div className="hero-bg" />
      <div className="hero-glow" ref={glowRef} />
      <div className="hero-glow hero-glow-2" />
      <div className="hero-glow hero-glow-3" />
      <div className="hero-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
        <div className="shape shape-4" />
      </div>

      <div className="container hero-content">
        <div className="hero-main">
          <div className="hero-text">
            <p className="hero-eyebrow">
              <span className="status-dot" />
              UPLB BSCS Graduate · Open to opportunities
            </p>
            <h1>
              Hi, I'm <span className="gradient-text">{about.displayName}</span>.<br />
              <span className="hero-typed">
                {typed}
                <span className="cursor-blink">|</span>
              </span>
            </h1>
            <p className="hero-sub">
              UPLB BSCS graduate building full-stack apps, mobile experiences,
              systems software, and games. Based in the Philippines, open to remote.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View my work
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href={about.social.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                Schilion
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H5M11 3v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href={about.social.github2} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                Schillion
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H5M11 3v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="hero-widget-wrap">
            <TerminalWidget />
          </div>
        </div>

        <div className="hero-stats" ref={statsRef}>
          <StatItem value={projects.length} label="Projects built" active={statsVisible} />
          <div className="stat-divider" />
          <StatItem value={disciplines} suffix="" label="Disciplines" active={statsVisible} />
          <div className="stat-divider" />
          <StatItem value={7} suffix="+" label="Languages" active={statsVisible} />
          <div className="stat-divider" />
          <StatItem value={4} suffix="+" label="Years coding" active={statsVisible} />
        </div>
      </div>

      <Marquee />
    </section>
  );
}
