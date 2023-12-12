import React from "react";
import "./aboutBox.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const AboutBox = () => {
  return (
    <div style={{ marginLeft: 120 }}>
      <h1>OUR COMPANY</h1>
      <p className="first-subtitle">Some Fine Words About Us</p>
      <p className="second-subtitle">
        Vestibulum ac diam sit amet quam vehicula elementum amet est on dui.
        Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet quam
        vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.
      </p>
      <div className="images-container">
        <FaArrowLeft size={10} color="gray" />
        <FaArrowRightLong size={15} style={{ marginLeft: 15 }} />
      </div>
    </div>
  );
};

export default AboutBox;
