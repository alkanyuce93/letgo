import React from "react";
import "./textArea.css";

const CustomTextarea = ({ ...props }) => {
  return (
    <textarea
      style={{
        width: "100%",
        height: 120,
        padding: 10,
        backgroundColor: "rgba(244, 250, 254, 0.5)",
        border: "none",
      }}
      className="custom-textarea"
      placeholder={props.placeholder}
    />
  );
};

export default CustomTextarea;
