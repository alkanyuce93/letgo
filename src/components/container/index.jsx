import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./container.css";
import TextInput from "../textInput";
import CustomButton from "../customButton";
import Box from "../box";
import AboutBox from "../aboutBox";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import CustomTextarea from "../customTextArea";

const ContainerComponent = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const sliderItems = [
    { id: 1, width: 300, height: 200 },
    { id: 2, width: 300, height: 200 },
    { id: 3, width: 300, height: 200 },
    { id: 4, width: 300, height: 200 },
    { id: 5, width: 300, height: 200 },
    { id: 6, width: 300, height: 200 },
  ];

  const sliderItems2 = [
    { id: 1, width: 310, height: 290 },
    { id: 2, width: 310, height: 290 },
    { id: 3, width: 310, height: 290 },
  ];

  return (
    <Container fluid>
      <Row>
        <Col xl={2} className="left-col"></Col>

        <Col xl={8}>
          <Row>
            <Col xl={6} className="middle-left-col">
              <div className="middle-left-col-content">
                <h1 className="header-text">The Spirit of Digital Agency.</h1>
                <p className="paragraph-margin-top">
                  Vestibulum ac diam sit amet quam vehicula elementum amet est
                  on dui. Nulla porttitor accumsan tincidunt.
                </p>
                <Row className="full-width-row">
                  <Col xl={6} className="button-row-col">
                    <CustomButton type="small" text={"More About us"} />
                  </Col>
                  <Col xl={6} className="button-row-col">
                    <div className="button-row-col-text">Get in Touch</div>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col xl={6} className="middle-right-col">
              <div className="middle-left-col-content">
                <img
                  src="/illustration1.png"
                  alt="Group-1"
                  className="illustration-1"
                />
              </div>
            </Col>
          </Row>
          <Row className="margin-top-50">
            <Col xl={4} className="middle-mid-left-col">
              <div className="middle-mid-left-col-content">
                <h1 className="header-2-text">
                  Anything you need, we’ve got you covered
                </h1>
                <CustomButton type="xsmall" text={"Get in Touch"} />
              </div>
            </Col>
            <Col xl={4} className="middle-mid-mid-col">
              <div className="middle.mid-mid-col-content">
                <Box
                  image="./bag.png"
                  imageWidth={60}
                  imageHeight={60}
                  header="Web & Graphic Design"
                  content="Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt."
                />
              </div>
            </Col>
            <Col xl={4} className="middle-mid-right-col">
              <div className="middle-mid-right-col-content">
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

          <Row style={{ marginTop: 240 }}>
            <Col xl={6} className="middle.mid.bottom-col">
              <img className="about-image" src="/about.png" alt="Group-1" />
            </Col>

            <Col xl={6} className="middle.mid.bottom-col">
              <AboutBox />
            </Col>
          </Row>

          <Row style={{ position: "relative", marginTop: 180 }}>
            <Row className="slider-header-row">
              <Col xl={4}>
                <h1 className="header-2-text">
                  See some of our Creative work.
                </h1>
              </Col>
              <Col xl={8} className="slider-header-row-col">
                <div className="absolute-right-5">
                  <FaArrowLeft
                    size={10}
                    color="gray"
                    style={{ marginRight: 15 }}
                  />
                  <FaArrowRightLong size={15} />
                </div>
                <div className="absolute-bottom-center">See More of These</div>
              </Col>
            </Row>

            {sliderItems.map((item, index) => (
              <Col key={item.id} className="slider-item" xs={4}>
                <div
                  style={{
                    width: item.width,
                    height: item.height,
                    backgroundColor: "#c3d0d8",
                  }}
                ></div>
              </Col>
            ))}
          </Row>

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

        <Col xl={2} className="right-col"></Col>
      </Row>
    </Container>
  );
};

export default ContainerComponent;
