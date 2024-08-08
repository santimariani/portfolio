import React from "react";
import MarianiDigitalCard from "/MarianiDigitalCard.png";

import "../CSS/DigitalCard.css";

const DigitalCard = () => {
  return (
    <div className="center">
      <p id="digitalCardTitle">SCAN FOR CONTACT</p>
      <img src={MarianiDigitalCard} id="digitalCard"></img>
      <a
        href="https://www.santimariani.com/contact-me"
        className="contactButton"
      >
        OR CONTACT ME HERE
      </a>
    </div>
  );
};

export default DigitalCard;
