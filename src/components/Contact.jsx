import { useInView } from '../hooks/useInView';
import { about } from '../data/projects';

export default function Contact() {
  const [ref, inView] = useInView();

  return (
    <>
      <section id="contact" className="contact-section">
        <div className="contact-bg" />
        <div className="contact-glow" />
        <div className="container">
          <div
            ref={ref}
            className={`contact-inner reveal${inView ? ' visible' : ''}`}
          >
            <p className="section-label">Contact</p>
            <h2>Let's work together.</h2>
            <p>
              Have a project in mind, a role to fill, or just want to connect?
              Reach out via email or phone — I'll get back to you.
            </p>

            <div className="contact-info-cards">
              <a href={`mailto:${about.email}`} className="contact-info-card">
                <span className="contact-info-icon">✉</span>
                <div>
                  <div className="contact-info-label">Email</div>
                  <div className="contact-info-value">{about.email}</div>
                </div>
              </a>
              <a href={`tel:${about.phone}`} className="contact-info-card">
                <span className="contact-info-icon">✆</span>
                <div>
                  <div className="contact-info-label">Phone</div>
                  <div className="contact-info-value">{about.phone}</div>
                </div>
              </a>
            </div>

            <div className="contact-actions">
              {about.social.linkedin !== '#' && (
                <a href={about.social.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline-white">
                  LinkedIn
                </a>
              )}
              <a href={about.social.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline-white">
                GitHub (Schilion)
              </a>
              <a href={about.social.github2} target="_blank" rel="noopener noreferrer" className="btn btn-outline-white">
                GitHub (Schillion)
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <span>© {new Date().getFullYear()} {about.name}. All rights reserved.</span>
          <span>Built with React + Vite</span>
        </div>
      </footer>
    </>
  );
}
