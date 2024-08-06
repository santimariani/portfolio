import React from "react";
import MarianiDigitalCard from "/MarianiDigitalCard.png";

import "../CSS/DigitalCard.css"

const DigitalCard = () => {
  return (
    <div className="center">
      <p id="digitalCardTitle">SCAN FOR CONTACT CARD</p>
      <img src={MarianiDigitalCard} id="digitalCard"></img>
    </div>
  );
};

export default DigitalCard;
