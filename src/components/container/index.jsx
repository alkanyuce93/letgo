import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./container.css";
import TextInput from "../textInput";
import CustomButton from "../customButton";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import CustomTextarea from "../customTextArea";
import Services from "../services";
import Portfolio from "../portfolio";

const ContainerComponent = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const sliderItems2 = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <Container fluid>
      <Row className="padding-top-100">
        <Col className="offset-xl-2" xl={8} sm={12}>
          <Row>
            <Col md={6} sm={12}>
              <Row className="padding-top-100">
                <h1 className="header-text">The Spirit of Digital Agency.</h1>
                <p className="subtitle-text">
                  Vestibulum ac diam sit amet quam vehicula elementum amet est
                  on dui. Nulla porttitor accumsan tincidunt.
                </p>
                <Row style={{ justifyContent: "space-between" }} xl={6}>
                  <Col xl={6}>
                    <CustomButton type="small" text={"More About us"} />
                  </Col>
                  <Col className="more-about-btn" xl={6}>
                    <Row className="button-row-col-text">Get in Touch</Row>
                  </Col>
                </Row>
              </Row>
            </Col>
            <Col md={6} sm={12}>
              <div className="relative-div">
                <img
                  className="illustration-1 image-width-100"
                  src="/illustration1.png"
                  alt="Group-1"
                />
              </div>
            </Col>
          </Row>
          <Services />

          <Row className="padding-top-100">
            <Col md={6}>
              <div className="relative-div">
                <img
                  className="illustration-2"
                  src="/about.png"
                  alt="Group-1"
                />
              </div>
            </Col>

            <Col md={6}>
              <h1 className="header-3-text">OUR COMPANY</h1>
              <p className="first-subtitle">Some Fine Words About Us</p>
              <p className="second-subtitle">
                Vestibulum ac diam sit amet quam vehicula elementum amet est on
                dui. Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit
                amet quam vehicula elementum amet est on dui. Nulla porttitor
                accumsan tincidunt.
              </p>

              <div>
                <FaArrowLeft className="me-3" size={10} color="gray" />
                <FaArrowRightLong size={15} />
              </div>
            </Col>
          </Row>

          <Portfolio />

          <Row className="mt-5">
            <Col xl={12}>
              <h1 className="header-3-text ">BLOG STORIES</h1>
              <h1 className="header-2-text">Check Our News</h1>
            </Col>
            {sliderItems2.map((item, index) => (
              <Col
                className="mb-3"
                xl={4}
                md={6}
                sm={12}
                key={item.id}
                onClick={() => setSelectedItem(index)}
              >
                <Card
                  className="rounded-0 shadow"
                  style={{
                    cursor: "pointer",
                    backgroundColor:
                      selectedItem === index ? "#ff4359" : "initial",
                    color: selectedItem === index ? "#fff" : "#000",
                  }}
                >
                  <Card.Body className="p-5">
                    <Card.Title className="mb-3">New Adventure</Card.Title>
                    <Card.Subtitle className="mb-3">
                      17 March 2019
                    </Card.Subtitle>
                    <Card.Text>
                      Vestibulum ac diam sit amet quam vehicula elementum amet
                      est on dui. Nulla porttitor accumsan tincidunt.
                    </Card.Text>
                  </Card.Body>

                  <Row>
                    <Col className="offset-9 pb-4" xs={3}>
                      <FaArrowRightLong
                        size={15}
                        style={{
                          color: selectedItem === index ? "#fff" : "#ff4359",
                        }}
                      />
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
          <Row className="mt-5">
            <div>
              <h1 className="header-3-text ">CONTACT US</h1>
              <h1 className="header-2-text">Get in Touch</h1>
            </div>
            <Col md={6} className="mt-3">
              <TextInput
                placeholderColor={"#314584"}
                placeholder="Your email"
              />
            </Col>
            <Col md={6} className="mt-3">
              <TextInput placeholder="Subject" />
            </Col>
          </Row>
          <Row>
            <Col xl={12} className="mt-3">
              <CustomTextarea placeholder="Your Message" />
            </Col>
            <Col xl={12} className="my-3 d-flex justify-content-center">
              <CustomButton type="small" text={"Send Message"} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ContainerComponent;
