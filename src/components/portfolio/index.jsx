// Portfolio.jsx

import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import "../container/container.css";

const Portfolio = () => {
  return (
    <Row className="padding-top-300">
      <Row>
        <h1 className="header-2-text">See some of our Creative work.</h1>
        <div className="d-inline-flex justify-content-end ">
          <div>
            <FaArrowLeft className="me-3" size={10} color="gray" />
            <FaArrowRightLong size={15} />
          </div>
        </div>
      </Row>

      <Row>
        <Col xs={6} md={4}>
          <Card
            style={{
              height: "11rem",
              backgroundColor: "rgba(187, 187, 188, 0.5)",
            }}
            className="mb-3 rounded-0"
          ></Card>
        </Col>
        <Col xs={6} md={4}>
          <Card
            style={{
              height: "11rem",
              backgroundColor: "rgba(187, 187, 188, 0.5)",
            }}
            className="mb-3 rounded-0"
          />
        </Col>
        <Col xs={6} md={4}>
          <Card
            style={{
              height: "11rem",
              backgroundColor: "rgba(187, 187, 188, 0.5)",
            }}
            className="mb-3 rounded-0"
          />
        </Col>
        <Col xs={6} md={4}>
          <Card
            style={{
              height: "11rem",
              backgroundColor: "rgba(187, 187, 188, 0.5)",
            }}
            className="mb-3 rounded-0"
          />
        </Col>
        <Col xs={6} md={4}>
          <Card
            style={{
              height: "11rem",
              backgroundColor: "rgba(187, 187, 188, 0.5)",
            }}
            className="mb-3 rounded-0"
          />
        </Col>
        <Col xs={6} md={4}>
          <Card
            style={{
              height: "11rem",
              backgroundColor: "rgba(187, 187, 188, 0.5)",
            }}
            className="mb-3 rounded-0"
          />
        </Col>
      </Row>

      <div className="absolute-bottom-center">See More of These</div>
    </Row>
  );
};

export default Portfolio;
