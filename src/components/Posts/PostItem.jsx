import React, { useContext } from "react";
import PropTypes from "prop-types";

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import Markdown from "../UI/Markdown";

const PostItem = ({ title, description, id, author, uid }) => {
  let trimmedDescription;
  if (description.length >= 50) {
    trimmedDescription = `${description.slice(0, 598)}....`;
  } else {
    trimmedDescription = description;
  }

  return (
    <Card className="mb-4 shadow border-primary">
      <Card.Header className="fs-5">
        <i className="bi bi-person-circle me-2" />
        {author}
      </Card.Header>
      <Card.Body>
        <h3>{title}</h3>
        <Markdown>{trimmedDescription}</Markdown>
        <Link
          to={`/posts/detail/${uid}/${id}`}
          className="btn btn-outline-primary"
        >
          Detailed View
        </Link>
      </Card.Body>
    </Card>
  );
};

PostItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default PostItem;
