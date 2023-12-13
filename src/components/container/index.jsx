import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./container.css";
import TextInput from "../textInput";
import CustomButton from "../customButton";
import AboutBox from "../aboutBox";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import CustomTextarea from "../customTextArea";
import IllustrationComponent from "../illustrationComponent";
import Services from "../services";
import Portfolio from "../portfolio";

const ContainerComponent = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const sliderItems2 = [
    { id: 1, width: 310, height: 290 },
    { id: 2, width: 310, height: 290 },
    { id: 3, width: 310, height: 290 },
  ];

  return (
    <Container fluid>
      <Row>
        <Col className="offset-xl-2" xl={8} sm={12}>
          {/* <Row className="middle-height">
            <Col xl={6} md={12} l className="middle-left-col">
              <div className="middle-left-col-content">
                <h1 className="header-text">The Spirit of Digital Agency.</h1>
                <p className="paragraph-margin-top">
                  Vestibulum ac diam sit amet quam vehicula elementum amet est
                  on dui. Nulla porttitor accumsan tincidunt.
                </p>
                <Row className="full-width-row">
                  <Col xl={6} md={12} className="button-row-col">
                    <CustomButton type="small" text={"More About us"} />
                  </Col>
                  <Col xl={6} md={12} className="button-row-col">
                    <div className="button-row-col-text">Get in Touch</div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xl={6} md={12} className="middle-left-col">
              <div className="illustration-container">
                <img
                  src="/illustration1.png"
                  alt="Group-1"
                  className="illustration-1"
                />
              </div>
            </Col>
          </Row> */}
          <Services />

          <Row xl={12} style={{ marginTop: 240 }}>
            <Col xl={6}>
              <img className="about-image" src="/about.png" alt="Group-1" />
            </Col>

            <Col xl={6} md={{ span: 12, offset: 12 }}>
              <h1 className="header-3-text">OUR COMPANY</h1>
              <p className="first-subtitle">Some Fine Words About Us</p>
              <p className="second-subtitle">
                Vestibulum ac diam sit amet quam vehicula elementum amet est on
                dui. Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit
                amet quam vehicula elementum amet est on dui. Nulla porttitor
                accumsan tincidunt.
              </p>

              <div className="images-container">
                <FaArrowLeft size={10} color="gray" />
                <FaArrowRightLong size={15} style={{ marginLeft: 15 }} />
              </div>
            </Col>
          </Row>

          <Portfolio />

          <Row style={{ marginTop: 50, display: "flex", flexDirection: "row" }}>
            <div>
              <h1 className="header-3-text ">BLOG STORIES</h1>
              <h1 className="header-2-text">Check Our News</h1>
            </div>
            {sliderItems2.map((item, index) => (
              <Col key={item.id} xl={4} onClick={() => setSelectedItem(index)}>
                <div
                  style={{
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    width: item.width,
                    height: item.height,
                    cursor: "pointer",
                    backgroundColor:
                      selectedItem === index ? "#ff4359" : "initial",
                    color: selectedItem === index ? "#fff" : "#000",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 40,
                      left: 40,
                      fontSize: 18,
                      cursor: "pointer",
                    }}
                  >
                    New Adventure
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: 75,
                      left: 40,
                      fontSize: 14,
                      cursor: "pointer",
                    }}
                  >
                    17 March 2019
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: 120,
                      left: 40,
                      fontSize: 14,
                      cursor: "pointer",
                    }}
                  >
                    Vestibulum ac diam sit amet quam vehicula elementum amet est
                    on dui. Nulla porttitor accumsan tincidunt.
                  </div>
                  <FaArrowRightLong
                    size={15}
                    style={{
                      position: "absolute",
                      bottom: 10,
                      right: 10,
                      color: selectedItem === index ? "#fff" : "#ff4359",
                      marginLeft: 15,
                    }}
                  />
                </div>
              </Col>
            ))}
          </Row>
          <Row
            style={{
              marginTop: 50,
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div>
              <h1 className="header-3-text ">CONTACT US</h1>
              <h1 className="header-2-text">Get in Touch</h1>
            </div>
            <Col xl={6}>
              <TextInput
                placeholderColor={"#314584"}
                placeholder="Your email"
              />
            </Col>
            <Col xl={6}>
              <TextInput placeholder="Subject" />
            </Col>
          </Row>
          <Row
            style={{
              marginTop: 50,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CustomTextarea placeholder="Your Message" />
          </Row>
          <div
            style={{
              alignItems: "center",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: 70,
              marginBottom: 70,
            }}
          >
            <CustomButton type="small" text={"Send Message"} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContainerComponent;
