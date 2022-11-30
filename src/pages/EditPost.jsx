import React, { useContext } from "react";

import { Container } from "react-bootstrap";
import { useHistory, useParams, Redirect } from "react-router-dom";
import { database } from "../firebase.config";

import MainForm from "../components/EditPost/MainForm";
import MainTitle from "../components/EditPost/MainTitle";
import PostSpinner from "../components/UI/PostSpinner";
import moment from "moment/moment";

import { ref, child, update } from "firebase/database";
import { useObject } from "react-firebase-hooks/database";
import { AuthContext } from "../store";

export default function EditPost() {
  const { id, uid } = useParams();
  const { currentUser } = useContext(AuthContext);

  const history = useHistory();

  const userPostRef = child(ref(database), `/user/${uid}/${id}`);
  const postRef = child(ref(database), `/posts/${id}`);

  const [postSnapshot, postLoading, postError] = useObject(postRef);
  const [userPostSnapshot, userPostLoading, userPostError] =
    useObject(userPostRef);

  const currentDate = moment().format("MMMM Do YYYY");

  const postSnapshotValue = postSnapshot?.val();
  const userPostSnapshotValue = userPostSnapshot?.val();

  const editPostHandler = async (title, description) => {
    const editedUserPost = {
      title,
      description,
      editedOn: currentDate,
      createdOn: userPostSnapshotValue.createdOn,
    };

    const editedPost = {
      title,
      description,
      author: postSnapshotValue.author,
      createdOn: postSnapshotValue.createdOn,
      uid: postSnapshotValue.uid,
      editedOn: currentDate,
    };

    const updates = {};
    updates[`/user/${uid}/${id}/`] = editedUserPost;
    updates[`/posts/${id}/`] = editedPost;
    try {
      await update(ref(database), updates);
    } catch (err) {
      history.replace("/error");
    }

    history.replace("/home");
  };

  if (postLoading || userPostLoading) {
    return <PostSpinner />;
  }

  if (postError || userPostError) {
    return <Redirect to="/error" />;
  }

  const defaultValues = {
    title: userPostSnapshotValue.title,
    description: userPostSnapshotValue.description,
  };
  if (!currentUser) {
    return <Redirect to="/home" />;
  }

  return (
    <Container>
      <MainTitle />

      <MainForm defaultValues={defaultValues} onEditPost={editPostHandler} />
    </Container>
  );
}
