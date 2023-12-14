import React, { useEffect, useState } from "react";
import "./aboutBox.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Row } from "react-bootstrap";

const AboutBox = () => {
  return (
    <Row>
      <h1 className="header-3-text">OUR COMPANY</h1>
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
    </Row>
  );
};

export default AboutBox;
