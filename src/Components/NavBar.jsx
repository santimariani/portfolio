import React from "react";
import { NavLink, useLocation} from "react-router-dom";

import "../CSS/NavBar.css";

const NavBar = () => {
  const location = useLocation();

  return (
    <nav>
      <ul className="navbar">
        <li>
          <NavLink to="/">ABOUT ME</NavLink>
        </li>
        <li>
          <NavLink to="/projects">PROJECTS</NavLink>
        </li>
        <li>
          <NavLink to="/skills">SKILLS</NavLink>
        </li>
        <li>
          <NavLink to="/resume">RESUME</NavLink>
        </li>
        <li>
          <NavLink to="/digital-card">DIGITAL CARD</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
