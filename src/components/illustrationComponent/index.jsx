import React, { useState, useEffect } from "react";
import "./illustrationComponent.css";

const IllustrationComponent = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth, window.innerHeight]);

  const ratio = 0.3;

  const adjustedWidth = windowSize.width * ratio;
  const adjustedHeight = windowSize.height * ratio;

  return (
    <img
      src="/illustration1.png"
      alt="Group-1"
      className="illustration-1"
      style={{
        width: windowSize.width > 1050 ? "500px" : `${adjustedWidth}px`,
        height: windowSize.height > 680 ? "450px" : `${adjustedHeight}px`,
      }}
    />
  );
};

export default IllustrationComponent;
