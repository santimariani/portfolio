import React from "react";
import MarianiDigitalCard from "/MarianiDigitalCard.png";

const DigitalCard = () => {
  return (
    <div className="center">
      <p>SCAN MY CONTACT INFO</p>
      <img src={MarianiDigitalCard} id="digitalCard"></img>
    </div>
  );
};

export default DigitalCard;
