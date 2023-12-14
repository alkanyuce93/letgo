import React from "react";

const CustomButton = ({
  type = "medium",
  backgroundColor = "#ff3946",
  textColor = "#ffffff",
  text,
}) => {
  const sizes = {
    xsmall: { width: 100, height: 30, fontSize: 8 },
    small: { width: 200, height: 50, fontSize: 16 },
    medium: { width: 356, height: 78, fontSize: 18 },
    large: { width: 500, height: 100, fontSize: 20 },
  };

  const { width, height, fontSize } = sizes[type] || sizes.medium;

  const buttonStyle = {
    backgroundColor,
    color: textColor,
    borderRadius: "100px",
    width: `${width}px`,
    height: `${height}px`,
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    fontSize: `${fontSize}px`,
    alingItems: "center",
  };

  return <button style={buttonStyle}>{text}</button>;
};

export default CustomButton;
