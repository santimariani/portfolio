import React from "react";

import santiImage from "../assets/santiTransparent.png";
import SocialMedia from "./SocialMedia";

import "../CSS/ImageSide.css";

const ImageSide = () => {
  return (
    <section id="imageSide">
      <SocialMedia />
      <div className="imageWrapper">
        <img src={santiImage} id="santiImage" alt="Santi" />
        {/* <div className="playBioButton">PLAY BIO</div> */}
      </div>
      <div id="imageSideBackground"></div>
      <div id="imageSideBorder"></div>
    </section>
  );
};

export default ImageSide;
