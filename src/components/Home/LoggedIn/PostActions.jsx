import React from "react";
import { Link } from "react-router-dom";

const PostActions = () => {
  return (
    <div className="text-center mb-3">
      <Link to="/home/add-post" className="btn btn-primary">
        Add Post
      </Link>
    </div>
  );
};

export default PostActions;
