import React from "react";
import PropTypes from "prop-types";

const Title = ({ children, className = "" }) => {
  return <h1 className={`display-1 fw-bold ${className}`}>{children}</h1>;
};

Title.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

export default Title;
