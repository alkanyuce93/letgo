import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./header.css";

const Header = () => {
  return (
    <Container fluid>
      <Row className="header-row">
        <Col xs={2} className="logo-col">
          <img
            src="/doobLogo.png"
            alt="logo"
            style={{
              width: 69,
              height: 30,
            }}
          />
        </Col>

        <Col xs={8} className="menu-col">
          <div className="menu-items">
            <span>Home.</span>

            <span>About Us.</span>

            <span>Portfolio.</span>

            <span>Blog.</span>

            <span>Contact Us.</span>
          </div>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <span>EN </span>
              <img
                src="/downArrow.png"
                alt="downArrow"
                style={{
                  width: 10,
                  height: 10,
                  marginLeft: 5,
                }}
              />
            </div>
            <Button variant="none" className="header-button">
              Contact Us
              <img
                src="/leftArrow.png"
                alt="arrow"
                style={{
                  marginLeft: 20,
                  width: 30,
                  height: 19,
                }}
              />
            </Button>
          </div>
        </Col>
        <Col xs={2} className="logo-col"></Col>
      </Row>
    </Container>
  );
};

export default Header;
