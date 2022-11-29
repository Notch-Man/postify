import React from "react";
import { Container } from "react-bootstrap";
import Title from "../../UI/Title";

const MainTitle = () => {
  return (
    <Container className="text-center text-white pt-5">
      <Title>Postify</Title>
      <p className="lead">Free & Open Source Post App</p>
    </Container>
  );
};

export default MainTitle;
