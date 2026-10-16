import { useState } from "react";
import "./App.css";
import { profile, skills, education, certifications, projects, recordings, story } from "./data";

const links = ["about", "story", "skills", "projects", "music", "education", "contact"];

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="nav">
        <a href="#top" className="logo">Sakshi S</a>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
        <ul className={open ? "open" : ""}>
          {links.map((l) => (
            <li key={l}><a href={`#${l}`} onClick={() => setOpen(false)}>{l}</a></li>
          ))}
        </ul>
      </nav>

      <header id="top" className="hero">
        <img className="avatar-img" src="/photo.jpg" alt="Sakshi S" />
        <h1>{profile.name}</h1>
        <p>{profile.tagline}</p>
        <div className="btns">
          <a className="btn" href="#projects">View Projects</a>
          <a className="btn ghost" href="#music">Listen to Music</a>
        </div>
      </header>

      <main>
        <Section id="about" title="About Me"><p className="lead">{profile.about}</p></Section>

        <Section id="story" title="My Story">
          <div className="grid">
            {story.map((s) => (
              <div className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Technical Skills">
          <div className="grid">
            {skills.map((s) => (
              <div className="card" key={s.group}>
                <h3>{s.group}</h3>
                <div className="tags">{s.items.map((i) => <span key={i}>{i}</span>)}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid">
            {projects.map((p) => (
              <div className="card" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="tags">{p.stack.map((t) => <span key={t}>{t}</span>)}</div>
                <div className="btns small">
                  {p.github && <a className="btn" href={p.github} target="_blank" rel="noreferrer">GitHub</a>}
                  {p.demo && <a className="btn ghost" href={p.demo} target="_blank" rel="noreferrer">Live Demo</a>}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="music" title="Music">
          <p className="lead">
            Music has been , is and will always be a big part of my life . It has taught me discipline, patience, and consistency.
            Here are two of my most favourite songs I have sung :
          </p>
          {recordings.length === 0 ? (
            <div className="card placeholder">
              <strong>Recordings coming soon.</strong>
              <p>No recordings have been added yet.</p>
            </div>
          ) : (
            <div className="grid">
              {recordings.map((r) => (
                <div className="card" key={r.src}>
                  <h3>{r.title}</h3>
                  {r.raga && <p className="muted">Raga: {r.raga}</p>}
                  <audio controls preload="none" src={r.src} style={{ width: "100%" }}>
                    Your browser does not support audio.
                  </audio>
                </div>
              ))}
            </div>
          )}
        </Section>

        <Section id="education" title="Education & Certifications">
          <div className="grid">
            <div>
              {education.map((e) => (
                <div className="card" key={e.school}>
                  <h3>{e.school}</h3>
                  <p>{e.detail}</p>
                  <p className="muted">{e.years}</p>
                </div>
              ))}
            </div>
            <div>
              {certifications.map((c) => (
                <div className="card" key={c.name}>
                  <h3>{c.name}</h3>
                  <p className="muted">{c.issuer}</p>
                  {c.link && <a className="btn small" href={c.link} target="_blank" rel="noreferrer">View Certificate</a>}
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="btns">
            <a className="btn" href={`mailto:${profile.email}`}>Email</a>
            <a className="btn ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </Section>
      </main>
      <footer>© {new Date().getFullYear()} Sakshi S</footer>
    </>
  );
}