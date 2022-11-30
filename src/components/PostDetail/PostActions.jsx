import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../store";

const PostActions = ({ onDelete, uid, id }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      {(currentUser.uid === uid ||
        currentUser.uid === "cWE75wzlJlXQ421bJVqEDKxnuWi2") && (
        <>
          <Button variant="danger" onClick={onDelete}>
            Delete
          </Button>
          <Link
            className="ms-3 btn btn-outline-primary"
            to={`/home/edit-post/${uid}/${id}`}
          >
            Edit
          </Link>
        </>
      )}
    </div>
  );
};

export default PostActions;
