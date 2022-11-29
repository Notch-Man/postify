import React, { useContext } from "react";

import { child, ref, set } from "firebase/database";
import { useObject } from "react-firebase-hooks/database";
import { database } from "../firebase.config";

import { Redirect, useHistory, useParams } from "react-router-dom";

import PostSpinner from "../components/UI/PostSpinner";
import PostInfo from "../components/PostDetail/PostInfo";
import PostActions from "../components/PostDetail/PostActions";

import { AuthContext } from "../store";
import { Card } from "react-bootstrap";

export default function PostDetail() {
  const { uid, id } = useParams();
  const { currentUser } = useContext(AuthContext);

  const history = useHistory();

  const postRef = child(ref(database), `posts/${id}`);
  const userPostRef = child(ref(database), `user/${uid}/${id}`);

  const [snapshot, loading, error] = useObject(postRef);
  const postData = snapshot?.val();

  const deletePostHandler = async () => {
    await set(postRef, null);
    await set(userPostRef, null);
    history.replace("/home");
  };

  if (error) {
    return <Redirect to="/404" />;
  }

  if (loading) {
    return <PostSpinner />;
  }
  if (!postData) {
    return <Redirect to="/404" />;
  }

  if (!currentUser) {
    return <Redirect to="/home" />;
  }

  return (
    <Card bg="dark" className="text-white mt-4 mx-5 mb-5">
      <Card.Body>
        <PostInfo {...postData} />
        <PostActions uid={uid} id={id} onDelete={deletePostHandler} />
      </Card.Body>
    </Card>
  );
}