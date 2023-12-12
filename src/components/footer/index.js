import React from "react";
import "./footer.css";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#314584",
    height: "400px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={footerStyle}>
      <h1
        style={{
          color: "white",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        DOOB
      </h1>
      <h1
        style={{
          color: "#ff4359",
          fontSize: "48px",
          fontWeight: "bold",
        }}
      >
        CREATIVITY ABOVE
      </h1>
      <div className="menu-items">
        <span style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>
          Home.
        </span>

        <span style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>
          About Us.
        </span>

        <span style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>
          Portfolio.
        </span>

        <span style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>
          Blog.
        </span>

        <span style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>
          Contact Us.
        </span>
      </div>
      <h1
        style={{
          color: "white",
          fontSize: "14px",
          fontWeight: "bold",
          marginTop: 20,
        }}
      >
        © 2019 - Doob,All Right Reserved
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
