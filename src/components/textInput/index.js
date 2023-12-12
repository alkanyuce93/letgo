import React from "react";
import "./textInput.css";

const TextInput = ({
  borderRadius,
  borderWidth,
  borderColor,
  placeholderColor,
  ...props
}) => {
  const inputStyle = {
    backgroundColor: "rgba(244, 250, 254, 0.5)",
    color: "#314584",
    width: "100%",
    padding: "10px",
    border: `${borderWidth || "none"}`,
    borderRadius: `${borderRadius || "none"}`,
    borderColor: `${borderColor || "transparent"}`,
  };

  return (
    <input
      type="text"
      style={inputStyle}
      className="custom-input"
      placeholder={props.placeholder}
    />
  );
};

export default TextInput;
