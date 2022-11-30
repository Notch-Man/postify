import React from "react";
import { Container } from "react-bootstrap";

export default function Error() {
  return (
    <Container fluid className="mt-5 text-center">
      <h1 className="display-2">Error!</h1>
      <p>
        Something went wrong while performing an action. Please try again later.
      </p>
    </Container>
  );
}
