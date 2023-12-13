// Footer.js

import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h1>DOOB</h1>
      <h1 className="big-title">CREATIVITY ABOVE</h1>
      <div className="menu-items">
        <span className="menu-text">Home.</span>
        <span className="menu-text">About Us.</span>
        <span className="menu-text">Portfolio.</span>
        <span className="menu-text">Blog.</span>
        <span className="menu-text">Contact Us.</span>
      </div>
      <h1 style={{ fontSize: "14px", fontWeight: "bold", marginTop: 20 }}>
        © 2019 - Doob, All Right Reserved
      </h1>
      <div className="menu-items">
        <img src="/facebook.png" alt="facebook" />
        <img src="/twitter.png" alt="twitter" />
        <img src="/dribble.png" alt="instagram" />
      </div>
    </div>
  );
};

export default Footer;
