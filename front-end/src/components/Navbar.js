import { NavLink } from "react-router-dom";
import { useApp } from "../AppContext";
import "./Navbar.css";

function Navbar() {
  const { t, lang, toggleLang, theme, toggleTheme } = useApp();
  const n = t.nav;

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <span className="nav-logo">🚦</span>
        <span className="nav-title">RoadSafe</span>
      </div>

      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>{n.home}</NavLink>
        <NavLink to="/learn" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>{n.learn}</NavLink>
        <NavLink to="/scenario" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>{n.scenario}</NavLink>
        <NavLink to="/quiz" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>{n.quiz}</NavLink>
        <NavLink to="/story" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>{n.story}</NavLink>
        <NavLink to="/achievements" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>{n.achievements}</NavLink>
        <NavLink to="/parent" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>{n.parent}</NavLink>
        <NavLink to="/profile" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>{n.profile}</NavLink>
      </div>

      <div className="nav-controls">
        <button
          className="nav-toggle-btn"
          onClick={toggleTheme}
          title="Toggle Calm Mode"
          aria-label="Toggle theme"
        >
          {theme === "normal" ? "🌙" : "☀️"}
        </button>
        <button
          className="nav-lang-btn"
          onClick={toggleLang}
          title="Switch Language"
          aria-label="Switch language"
        >
          {lang === "en" ? "🇮🇳 தமிழ்" : "🇬🇧 EN"}
        </button>
        <NavLink to="/info" className="nav-info-btn" title="About">
          {n.info}
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;