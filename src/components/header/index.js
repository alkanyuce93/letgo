import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { RxHamburgerMenu } from "react-icons/rx";
import "./header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleHamburgerClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768 && window.innerHeight <= 670) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  return (
    <Container fluid>
      <Row className={`header-row ${showMenu ? "mobile-menu" : ""}`}>
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
          {!showMenu && (
            <div className="menu-items">
              <span>Home.</span>
              <span>About Us.</span>
              <span>Portfolio.</span>
              <span>Blog.</span>
              <span>Contact Us.</span>
            </div>
          )}

          <div className="en-section">
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

        <Col xs={2} className="logo-col">
          {showMenu && <RxHamburgerMenu onClick={handleHamburgerClick} />}
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mobile Menu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="menu-items-mobile">
            <span>Home.</span>
            <span>About Us.</span>
            <span>Portfolio.</span>
            <span>Blog.</span>
            <span>Contact Us.</span>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Header;
