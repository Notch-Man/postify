import React from "react";
import { Container } from "react-bootstrap";

export default function NotFound() {
  return (
    <Container fluid className="mt-5 text-center">
      <h1 className="display-2">404 Not Found</h1>
      <p>The post you were searching for was not found in our server.</p>
    </Container>
  );
}
