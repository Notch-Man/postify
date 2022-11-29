import React from "react";
import PropTypes from "prop-types";

import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

const Markdown = ({ children }) => {
  return <ReactMarkdown remarkPlugins={[gfm]}>{children}</ReactMarkdown>;
};

Markdown.propTypes = {
  children: PropTypes.string,
};

export default Markdown;
