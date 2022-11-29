import React from "react";
import PropTypes from "prop-types";
import Markdown from "../UI/Markdown";

const PostInfo = ({ title, author, createdOn, description, editedOn = "" }) => {
  return (
    <>
      <h1 className="display-4 pe-5">{title}</h1>
      <div className="lead fs-6">
        <p>
          <i>Created By: {author}</i>
        </p>
        <p className="lead fs-6 fw-bold">Created On: {createdOn}</p>
        {editedOn && <p className="lead fs-6 fw-bold">Edited On: {editedOn}</p>}
      </div>
      <Markdown
        style={{
          textAlign: "justify",
        }}
      >
        {description}
      </Markdown>
    </>
  );
};
PostInfo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  createdOn: PropTypes.string,
  author: PropTypes.string,
};

export default PostInfo;
