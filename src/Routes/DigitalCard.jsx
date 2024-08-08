import React from "react";
import MarianiDigitalCard from "/MarianiDigitalCard.png";
import { Link } from "react-router-dom";


import "../CSS/DigitalCard.css";

const DigitalCard = () => {
  return (
    <div className="center">
      <p id="digitalCardTitle">SCAN FOR CONTACT CARD</p>
      <img src={MarianiDigitalCard} id="digitalCard"></img>
      <Link to="/contact-me" className="contactButton">
        OR CONTACT ME HERE
      </Link>
    </div>
  );
};

export default DigitalCard;
