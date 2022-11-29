import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

import Markdown from "../UI/Markdown";

const Preview = ({ description }) => {
  const [showPreview, setShowPreview] = useState(false);
  const previewHandler = () => {
    setShowPreview((prev) => !prev);
  };
  return (
    <>
      <Button
        variant="outline-primary"
        className="me-2"
        onClick={previewHandler}
      >
        Preview
      </Button>
      {showPreview && (
        <div className="border border-primary my-3 py-3 px-2 rounded">
          <Markdown>{description}</Markdown>
        </div>
      )}
    </>
  );
};
Preview.propTypes = {
  description: PropTypes.string,
};

export default Preview;
