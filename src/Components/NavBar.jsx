import React from "react";
import { Link } from "react-router-dom";

import "../CSS/NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <Link to="/">ABOUT ME</Link>
        </li>
        <li>
          <Link to="/projects">PROJECTS</Link>
        </li>
        <li>
          <Link to="/resume">RESUME</Link>
        </li>
        <li>
          <Link to="/digital-card">DIGITAL CARD</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
