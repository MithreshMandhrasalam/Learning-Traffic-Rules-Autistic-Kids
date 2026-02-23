import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Center navigation */}
      <div className="nav-center">
        <NavLink to="/" end>
          🏠 Home
        </NavLink>
        <NavLink to="/learn">
          📘 Learn
        </NavLink>
        <NavLink to="/quiz">
          📝 Quiz
        </NavLink>
        <NavLink to="/profile">
          👶 Profile
        </NavLink>
      </div>

      {/* Right corner info icon */}
      <div className="nav-right">
        <NavLink to="/info" title="About this app">
          ℹ️
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;