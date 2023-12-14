import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "../container/container.css";
import CustomButton from "../customButton";

const Services = () => {
  return (
    <Row className="mt-5 paddin-top-300">
      <Col xxl={4} md={12}>
        <div>
          <h1 className="header-2-text">
            Anything you need, we’ve got you covered
          </h1>
          <CustomButton type="xsmall" text={"Get in Touch"} />
        </div>
      </Col>
      <Col className="card-padding" xxl={4} sm={6} xs={12}>
        <Card className="rounded-0 shadow ">
          <Card.Body className="p-5">
            <Card.Img
              style={{ height: 60 }}
              className="mb-5"
              variant="top-left"
              src="./bag.png"
            />
            <Card.Title style={{ color: "#314584" }} className="mb-3">
              Web & Graphic Design
            </Card.Title>
            <Card.Text style={{ color: "#314584" }}>
              Vestibulum ac diam sit amet quam vehicula elementum amet est on
              dui. Nulla porttitor accumsan tincidunt.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col className="card-padding" xxl={4} sm={6} xs={12}>
        <Card className="rounded-0 shadow ">
          <Card.Body className="p-5">
            <Card.Img
              style={{ height: 60 }}
              className="mb-5"
              variant="top-left"
              src="./screen.png"
            />
            <Card.Title style={{ color: "#314584" }} className="mb-3">
              Web & Graphic Design
            </Card.Title>

            <Card.Text style={{ color: "#314584" }}>
              Vestibulum ac diam sit amet quam vehicula elementum amet est on
              dui. Nulla porttitor accumsan tincidunt.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Services;
