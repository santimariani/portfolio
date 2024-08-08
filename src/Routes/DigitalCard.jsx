import React, { Link } from "react";
import MarianiDigitalCard from "/MarianiDigitalCard.png";

import "../CSS/DigitalCard.css";

const DigitalCard = () => {
  return (
    <div className="center">
      <p id="digitalCardTitle">SCAN FOR CONTACT</p>
      <img src={MarianiDigitalCard} id="digitalCard"></img>
      <Link to="/contact-me" className="contactButton">
        OR CONTACT ME HERE
      </Link>
    </div>
  );
};

export default DigitalCard;
