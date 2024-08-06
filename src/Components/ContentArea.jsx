import React, { useState, useEffect } from "react";
import NavBar from "./NavBar.jsx";
import AllRoutes from "./AllRoutes.jsx";
import "../CSS/ContentArea.css";
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";

const ContentArea = () => {
  const [boxTitle, setBoxTitle] = useState("ABOUT ME");
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setBoxTitle("ABOUT ME");
        break;
      case "/resume":
        setBoxTitle("RESUME");
        break;
      case "/hidden-resume":
        setBoxTitle("HOW DID YOU GET HERE?!");
        break;
      case "/projects":
        setBoxTitle("PROJECTS");
        break;
      case "/digital-card":
        setBoxTitle("DIGITAL CARD");
        break;
      case "/contact-me":
        setBoxTitle("CONTACT ME");
        break;
      default:
        setBoxTitle("NOT FOUND");
        break;
    }
  }, [location.pathname]);

  return (
    <section id="contentArea">
      <header>
        <p id="name">SANTIAGO "SANTI" MARIANI</p>
        <p id="title">FULL-STACK SOFTWARE DEVELOPER</p>
      </header>
      <h1>{boxTitle}</h1>
      <div id="contactButton">
        <Link to="/contact-me">
          <h2>LET'S CHAT!</h2>
        </Link>
      </div>
      <section id="mainContent">
        <AllRoutes />
      </section>
      <footer>
        <NavBar />
      </footer>
    </section>
  );
};

export default ContentArea;
