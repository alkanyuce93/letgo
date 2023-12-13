import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import ContainerComponent from "./components/container";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Container fluid>
        <ContainerComponent />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
