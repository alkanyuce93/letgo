import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Header from "./components/header";
import ContainerComponent from "./components/container";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Container fluid>
        <Header />
        <ContainerComponent />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
