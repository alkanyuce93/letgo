import React from "react";
import { Row, Col } from "react-bootstrap";
import Box from "../box";
import "../container/container.css";
import CustomButton from "../customButton";

const Services = () => {
  return (
    <Row className="margin-top-50">
      <Col xl={4} md={12}>
        <div>
          <h1 className="header-2-text">
            Anything you need, we’ve got you covered
          </h1>
          <CustomButton type="xsmall" text={"Get in Touch"} />
        </div>
      </Col>
      <Col xl={4} md={6} sm={12}>
        <div>
          <Box
            image="./bag.png"
            imageWidth={60}
            imageHeight={60}
            header="Web & Graphic Design"
            content="Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt."
          />
        </div>
      </Col>
      <Col xl={4} md={6} sm={12}>
        <div c>
          <Box
            image="./screen.png"
            imageWidth={70}
            imageHeight={50}
            header="Web & App Development"
            content="Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt."
          />
        </div>
      </Col>
    </Row>
  );
};

export default Services;
