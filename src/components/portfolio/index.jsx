// Portfolio.jsx

import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import "../container/container.css";

const Portfolio = () => {
  return (
    <Row>
      <Row>
        <h1 className="header-2-text">See some of our Creative work.</h1>

        <FaArrowLeft size={10} color="gray" />
        <FaArrowRightLong size={15} />
      </Row>

      <Row xxl={6}>
        <Card
          style={{
            width: "17rem",
            height: "11rem",
            backgroundColor: "rgba(187, 187, 188, 0.5)",
          }}
          className="mb-3 mx-3"
        />
        <Card
          style={{
            width: "17rem",
            height: "11rem",
            backgroundColor: "rgba(187, 187, 188, 0.5)",
          }}
          className="mb-3 mx-3"
        />
        <Card
          style={{
            width: "17rem",
            height: "11rem",
            backgroundColor: "rgba(187, 187, 188, 0.5)",
          }}
          className="mb-3 mx-3"
        />
        <Card
          style={{
            width: "17rem",
            height: "11rem",
            backgroundColor: "rgba(187, 187, 188, 0.5)",
          }}
          className="mb-3 mx-3"
        />
        <Card
          style={{
            width: "17rem",
            height: "11rem",
            backgroundColor: "rgba(187, 187, 188, 0.5)",
          }}
          className="mb-3 mx-3"
        />
        <Card
          style={{
            width: "17rem",
            height: "11rem",
            backgroundColor: "rgba(187, 187, 188, 0.5)",
          }}
          className="mb-3 mx-3"
        />
      </Row>

      <div className="absolute-bottom-center">See More of These</div>
    </Row>
  );
};

export default Portfolio;
