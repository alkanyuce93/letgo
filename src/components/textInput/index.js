import React from "react";

const TextInput = ({ borderRadius, borderWidth, borderColor, ...props }) => {
  const inputStyle = {
    backgroundColor: "rgba(244, 250, 254, 0.5)",
    color: "black",
    width: "100%",
    padding: "10px",
    border: `${borderWidth || "none"}`,
    borderRadius: `${borderRadius || "none"}`,
    borderColor: `${borderColor || "transparent"}`,
  };

  return <input type="text" style={inputStyle} {...props} />;
};

export default TextInput;
