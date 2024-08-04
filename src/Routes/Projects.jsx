import React from "react";
import "../CSS/Projects.css";

const Projects = () => {
  return (
    <div id="projectsGrid">
      <section id="carouselGrid">
        <div className="square">
          <img src="/100Days.png" alt="Python RPG Project" />
        </div>
        <div className="square">
          <img src="/magic8.png" alt="Magic 8-Ball Project" />
        </div>
        <div className="square">
          <img src="/theater.png" alt="Theater API Project" />
        </div>
        <div className="square">
          <img src="/robinsonCrusoe.png" alt="Robinson Crusoe Project" />
        </div>
        <div className="square">
          <img src="/ultimateFighters2.png" alt="JS Video Game Project" />
        </div>

      </section>
      <section id="projectCanvas">
        <div id="projectDisplay"></div>
      </section>
      <section id="projectDescription">
        <p>TECHNOLOGIES USED: THIS • THAT • THIS & THAT • THAT & THIS</p>
      </section>
    </div>
  );
};

export default Projects;
