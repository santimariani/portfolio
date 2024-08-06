import React, { useState, useEffect } from "react";
import "../CSS/Projects.css";

import HundredDaysAbout from "../ProjectComments/HundredDaysAbout";
import MagicEightAbout from "../ProjectComments/MagicEightAbout";
import TheaterAbout from "../ProjectComments/TheaterAbout";
import RobinsonCrusoeAbout from "../ProjectComments/RobinsonCrusoeAbout";
import ShrinkifyAbout from "../ProjectComments/ShrinkifyAbout";
import UltimateFighterAbout from "../ProjectComments/UltimateFighterAbout";

// Define each image component
const HundredDays = () => <img src="/100Days.png" alt="Python RPG Project" />;
const MagicEight = () => <img src="/magic8.png" alt="Magic 8-Ball Project" />;
const Theater = () => <img src="/theater.png" alt="Theater API Project" />;
const RobinsonCrusoe = () => (
  <img src="/robinsonCrusoe.png" alt="Robinson Crusoe Project" />
);
const Shrinkify = () => (
  <img src="/shrinkify.png" alt="Shrinkify Project" />
);

const UltimateFighter = () => (
  <img src="/ultimateFighters2.png" alt="JS Video Game Project" />
);

// Create an array of components with keys, titles, technologies, and links
const ProjectsArray = [
  {
    component: <HundredDays />,
    key: "hundredDays",
    title: "100 DAYS TO VICTORY",
    comment: <HundredDaysAbout />
  },
  {
    component: <MagicEight />,
    key: "magicEight",
    title: "THE MAGIC 8 BLACK BALLHOLE",
    comment: <MagicEightAbout />
  },
  { 
    component: <Theater />, 
    key: "theater", 
    title: "DYNAMIC THEATER API",
    comment: <TheaterAbout />
  },
  {
    component: <RobinsonCrusoe />,
    key: "robinsonCrusoe",
    title: "CINEMATIC CRUSOE",
    comment: <RobinsonCrusoeAbout />
  },
  {
    component: <Shrinkify />,
    key: "shrinkify",
    title: "SHRINKIFY MY URL!",
    comment: <ShrinkifyAbout />
  },
  {
    component: <UltimateFighter />,
    key: "ultimateFighter",
    title: "ULTIMATE FIGHTER 2",
    comment: <UltimateFighterAbout />
  },
];

const Projects = () => {
  const [currentProjectKey, setCurrentProjectKey] = useState("hundredDays");
  const [prevProjectKey, setPrevProjectKey] = useState("ultimateFighter");
  const [nextProjectKey, setNextProjectKey] = useState("magicEight");
  const [boxTitle, setBoxTitle] = useState("100 Days to Victory");
  const [commentSection, setCommentSection] = useState(<UltimateFighterAbout/>);

  useEffect(() => {
    const currentProject = ProjectsArray.find(
      (project) => project.key === currentProjectKey
    );
    setBoxTitle(currentProject.title);
    setCommentSection(currentProject.comment);
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
    <>
      <section id="projectsGrid">
        <div id="projectContainer">
          <p className="projectTitle">{boxTitle}</p>
          <div id="projectContent">
            <div id="leftColumn">
              <div
                className="square"
                onClick={() => setCurrentProjectKey(prevProjectKey)}
              >
                {prevProjectComponent}
                <p>Prev</p>
              </div>
              <div
                className="square"
                onClick={() => setCurrentProjectKey(nextProjectKey)}
              >
                {nextProjectComponent}
                <p>Next</p>
              </div>
            </div>
            <div id="mainImage">
              {
                ProjectsArray.find(
                  (project) => project.key === currentProjectKey
                ).component
              }
            </div>
          </div>
        </div>
        <div id="buttonsColumn">
          <button
            className={`projectButtonOutliers ${
              currentProjectKey === "hundredDays" ? "active" : ""
            }`}
            onClick={() => setCurrentProjectKey("hundredDays")}
          >
            ALL PROJECTS
          </button>
          <button
            className={`projectButton ${
              currentProjectKey === "hundredDays" ? "active" : ""
            }`}
            onClick={() => setCurrentProjectKey("hundredDays")}
          >
            Python RPG
          </button>
          <button
            className={`projectButton ${
              currentProjectKey === "magicEight" ? "active" : ""
            }`}
            onClick={() => setCurrentProjectKey("magicEight")}
          >
            Magic 8-Ball
          </button>
          <button
            className={`projectButton ${
              currentProjectKey === "theater" ? "active" : ""
            }`}
            onClick={() => setCurrentProjectKey("theater")}
          >
            Dynamic Theater API
          </button>
          <button
            className={`projectButton ${
              currentProjectKey === "robinsonCrusoe" ? "active" : ""
            }`}
            onClick={() => setCurrentProjectKey("robinsonCrusoe")}
          >
            Cinematic Crusoe
          </button>
          <button
            className={`projectButton ${
              currentProjectKey === "shrinkify" ? "active" : ""
            }`}
            onClick={() => setCurrentProjectKey("shrinkify")}
          >
            URL SHRINKIFIER
          </button>
          <button
            className={`projectButton ${
              currentProjectKey === "ultimateFighter" ? "active" : ""
            }`}
            onClick={() => setCurrentProjectKey("ultimateFighter")}
          >
            Ultimate Fighter 2
          </button>
        </div>
      </section>
      <section id="commentsSection">
        {commentSection}
      </section>
    </>
  );
};

export default Projects;
