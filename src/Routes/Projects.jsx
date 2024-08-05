import React, { useState, useEffect } from "react";
import "../CSS/Projects.css";

// Define each image component
const HundredDays = () => <img src="/100Days.png" alt="Python RPG Project" />;

const MagicEight = () => <img src="/magic8.png" alt="Magic 8-Ball Project" />;

const Theater = () => <img src="/theater.png" alt="Theater API Project" />;

const RobinsonCrusoe = () => (
  <img src="/robinsonCrusoe.png" alt="Robinson Crusoe Project" />
);

const UltimateFighter = () => (
  <img src="/ultimateFighters2.png" alt="JS Video Game Project" />
);

// Create an array of components with keys
const ProjectsArray = [
  { component: <HundredDays />, key: "hundredDays" },
  { component: <MagicEight />, key: "magicEight" },
  { component: <Theater />, key: "theater" },
  { component: <RobinsonCrusoe />, key: "robinsonCrusoe" },
  { component: <UltimateFighter />, key: "ultimateFighter" },
];

const Projects = () => {
  const [currentProjectKey, setCurrentProjectKey] = useState("hundredDays");
  const [prevProjectKey, setPrevProjectKey] = useState("ultimateFighter");
  const [nextProjectKey, setNextProjectKey] = useState("magicEight");
  const [boxTitle, setBoxTitle] = useState("100 DAYS TO VICTORY");
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    switch (currentProjectKey) {
      case "hundredDays":
        setBoxTitle("100 DAYS TO VICTORY");
        break;
      case "magicEight":
        setBoxTitle("THE MAGIC 8 BLACK BALLHOLE");
        break;
      case "theater":
        setBoxTitle("THEATER API");
        break;
      case "robinsonCrusoe":
        setBoxTitle("CINEMATIC CRUSOE");
        break;
      case "ultimateFighter":
        setBoxTitle("ULTIMATE FIGHTER 2");
        break;
      default:
        setBoxTitle("NOT FOUND");
        break;
    }
  }, [currentProjectKey]);

  const currentIndex = ProjectsArray.findIndex(
    (project) => project.key === currentProjectKey
  );

  useEffect(() => {
    const prevIndex =
      (currentIndex - 1 + ProjectsArray.length) % ProjectsArray.length;
    const nextIndex = (currentIndex + 1) % ProjectsArray.length;
    setPrevProjectKey(ProjectsArray[prevIndex].key);
    setNextProjectKey(ProjectsArray[nextIndex].key);
  }, [currentIndex]);

  const prevProjectComponent = ProjectsArray.find(
    (project) => project.key === prevProjectKey
  ).component;

  const nextProjectComponent = ProjectsArray.find(
    (project) => project.key === nextProjectKey
  ).component;

  return (
    <div id="projectsGrid">
      <p className={hovering ? "shrink" : ""}>{boxTitle}</p>
      <div id="projectNavigation">
        <div
          className={`square ${hovering ? 'shrink' : ''}`}
          onClick={() => setCurrentProjectKey(prevProjectKey)}
        >
          {prevProjectComponent}
          <p>Previous</p>
        </div>
        <div
          id="projectDisplay"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          className={hovering ? 'grow' : ''}
        >
          {
            ProjectsArray.find((project) => project.key === currentProjectKey)
              .component
          }
        </div>
        <div
          className={`square ${hovering ? 'shrink' : ''}`}
          onClick={() => setCurrentProjectKey(nextProjectKey)}
        >
          {nextProjectComponent}
          <p>Next</p>
        </div>
      </div>
      <div id="projectButtons">
        <button className="projectButton" onClick={() => setCurrentProjectKey("hundredDays")}>
          100 Days to Victory
        </button>
        <button className="projectButton" onClick={() => setCurrentProjectKey("magicEight")}>
          Magic 8-Ball
        </button>
        <button className="projectButton" onClick={() => setCurrentProjectKey("theater")}>
          Theater API
        </button>
        <button className="projectButton" onClick={() => setCurrentProjectKey("robinsonCrusoe")}>
          Cinematic Crusoe
        </button>
        <button className="projectButton" onClick={() => setCurrentProjectKey("ultimateFighter")}>
          Ultimate Fighter 2
        </button>
      </div>
    </div>
  );
};

export default Projects;
