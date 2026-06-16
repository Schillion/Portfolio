const TECH = [
  'Node.js', 'Express.js', 'React.js', 'Flutter', 'Firebase',
  'MongoDB', 'Java', 'Python', 'C', 'JavaScript', 'Dart',
  'SQL', 'Rust', 'Docker', 'MySQL', 'REST APIs', 'Git', 'Flutter',
];

export default function Marquee() {
  const items = [...TECH, ...TECH];

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {items.map((t, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-dot" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
