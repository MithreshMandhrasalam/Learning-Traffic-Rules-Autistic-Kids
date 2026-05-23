import { Link } from "react-router-dom";
import { useApp } from "../AppContext";
import "./Home.css";

function Home() {
  const { t } = useApp();
  const h = t.home;

  return (
    <div className="home-page page-content">
      {/* HERO */}
      <section className="home-hero animate-fadeup">
        <div className="hero-lights">
          <div className="tl-light red-light"></div>
          <div className="tl-light yellow-light"></div>
          <div className="tl-light green-light"></div>
        </div>
        <div className="hero-text">
          <p className="hero-calm">{h.calm}</p>
          <h1 className="hero-title">{h.title}</h1>
          <p className="hero-sub">{h.subtitle}</p>
          <div className="hero-actions">
            <Link to="/learn" className="btn btn-primary hero-btn">📘 Start Learning</Link>
            <Link to="/story" className="btn btn-soft hero-btn">📖 Read a Story</Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="home-section">
        <div className="section-title">
          <h2>{h.features_title}</h2>
        </div>
        <div className="grid-3 features-grid">
          {h.features.map((f, i) => (
            <div key={i} className="feature-card card animate-fadeup" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AUTISM DESIGN */}
      <section className="home-section home-design-section">
        <div className="section-title">
          <h2>{h.design_title}</h2>
        </div>
        <div className="grid-3 design-grid">
          {h.design.map((d, i) => (
            <div key={i} className="design-card animate-fadeup" style={{ animationDelay: `${i * 0.07}s` }}>
              <span className="design-icon">{d.icon}</span>
              <span className="design-label">{d.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="home-section">
        <div className="why-card card">
          <h2>{h.why_title}</h2>
          <p>{h.why}</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="home-footer-text">{h.footer}</footer>
    </div>
  );
}

export default Home;