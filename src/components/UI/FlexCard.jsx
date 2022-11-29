import React from "react";
import PropTypes from "prop-types";
import { Card, Container } from "react-bootstrap";

const FlexCard = ({
  children,
  horizontal = false,
  variant,
  className,
  marginalPadding = false,
}) => {
  return (
    <Container
      className={`d-flex justify-content-center align-items-center ${className} `}
      style={{
        height: "calc(100vh - 56px)",
      }}
    >
      <Card
        style={{ width: `${horizontal ? "" : "30rem"}` }}
        bg={variant}
        className={`${marginalPadding ? `py-3` : "p-2"} ${
          variant === "dark" ? `text-white` : ""
        } shadow-lg border border-primary`}
      >
        <Card.Body>{children}</Card.Body>
      </Card>
    </Container>
  );
};

FlexCard.propTypes = {
  children: PropTypes.array,
  horizontal: PropTypes.bool,
  variant: PropTypes.string,
  className: PropTypes.string,
  marginalPadding: PropTypes.bool,
};

export default FlexCard;
