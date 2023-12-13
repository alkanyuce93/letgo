import React, { useEffect, useState } from "react";
import "./aboutBox.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const AboutBox = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 768 && window.innerHeight <= 670) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth, window.innerHeight]);

  return (
    <div className="container">
      <h1 className="header-3-text">OUR COMPANY</h1>
      <p className="first-subtitle">Some Fine Words About Us</p>
      <p className="second-subtitle">
        Vestibulum ac diam sit amet quam vehicula elementum amet est on dui.
        Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet quam
        vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.
      </p>
      {showMenu && (
        <div className="images-container">
          <FaArrowLeft size={10} color="gray" />
          <FaArrowRightLong size={15} style={{ marginLeft: 15 }} />
        </div>
      )}
    </div>
  );
};

export default AboutBox;
