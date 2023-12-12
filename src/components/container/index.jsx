import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./container.css";
import TextInput from "../textInput";
import CustomButton from "../customButton";
import Box from "../box";
import AboutBox from "../aboutBox";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const ContainerComponent = () => {
  const [selectedItem, setSelectedItem] = useState(6);
  const sliderItems = [
    { id: 1, width: 300, height: 200 },
    { id: 2, width: 300, height: 200 },
    { id: 3, width: 300, height: 200 },
    { id: 4, width: 300, height: 200 },
    { id: 5, width: 300, height: 200 },
    { id: 6, width: 300, height: 200 },
  ];

  const sliderItems2 = [
    { id: 1, width: 365, height: 350 },
    { id: 2, width: 365, height: 350 },
    { id: 3, width: 365, height: 350 },
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
                <p style={{ marginTop: 25 }}>
                  Vestibulum ac diam sit amet quam vehicula elementum amet est
                  on dui. Nulla porttitor accumsan tincidunt.
                </p>
                <Row
                  style={{
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 20,
                  }}
                >
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
          <Row
            style={{
              marginTop: 50,
              display: "flex",
              alignItems: "flex-start",
            }}
          >
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

          <Row style={{ marginTop: 175, position: "relative" }}>
            <Row className="slider-header-row">
              <Col xl={4}>
                <h1 className="header-2-text">
                  See some of our Creative work.
                </h1>
              </Col>
              <Col xl={8} className="slider-header-row-col">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <FaArrowLeft size={10} color="gray" />
                  <FaArrowRightLong size={15} style={{ marginLeft: 15 }} />
                </div>
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
          <Row style={{ marginTop: 50 }}>
            {sliderItems2.map((item, index) => (
              <Col
                key={item.id}
                className={`slider-item-2 ${
                  selectedItem === index + sliderItems.length ? "selected" : ""
                }`}
                xs={4}
                onClick={() => setSelectedItem(index + sliderItems.length)}
              >
                <div style={{ width: item.width, height: item.height }}></div>
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
            <Col xl={6}>
              <TextInput placeholder="E-mail" />
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
            <textarea
              style={{
                width: "100%",
                height: 120,
                padding: 10,
                backgroundColor: "rgba(244, 250, 254, 0.5)",
                border: "none",
              }}
              placeholder="Message Here"
            />
          </Row>
        </Col>

        <Col xl={2} className="right-col"></Col>
      </Row>
    </Container>
  );
};

export default ContainerComponent;
