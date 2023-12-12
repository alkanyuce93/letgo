import React from "react";
import "./box.css";

const Box = ({ image, imageWidth, imageHeight, header, content }) => {
  return (
    <div className="box-container">
      <img
        src={image}
        alt=""
        className="box-image"
        style={{ width: imageWidth, height: imageHeight, minWidth: 60 }}
      />
      <h2 className="box-header">{header}</h2>
      <p className="box-content">{content}</p>
    </div>
  );
};

export default Box;
