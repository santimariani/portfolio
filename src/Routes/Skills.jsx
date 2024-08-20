import React from "react";
import "../CSS/Skills.css";

const Skills = () => {
  return (
    <section id="skillsSection">
      {/* Front-End Skills */}
      <div className="skillsDiv" id="frontendDiv">
        <h3>Front-End</h3>
        <h4>JavaScript • Phaser <br></br>React • React Router <br></br> HTML • CSS</h4>
      </div>

      {/* Back-End Skills */}
      <div className="skillsDiv" id="backendDiv">
        <h3>Back-End</h3>
        <h4>Python • SQL <br></br> PostgreSQL • Postico <br></br> FastAPI • Supabase</h4>
      </div>

      {/* Miscellaneous Tools */}
      <div className="skillsDiv" id="miscDiv">
        <h3>General Tools</h3>
        <h4>Git • GitHub • VSCode <br></br> Chrome Dev Tools • Canva <br></br> Google Suite • MS Office</h4>
      </div>

      {/* Languages */}
      <div className="skillsDiv" id="languagesDiv">
        <h3>Languages</h3>
        <h4><span style={{fontWeight: "bold"}}>Fluent</span>: English, Spanish <br></br> <span style={{fontWeight: "bold"}}>Basic</span>: Italian, Latin, Greek, Hebrew</h4>
      </div>
    </section>
  );
};

export default Skills;