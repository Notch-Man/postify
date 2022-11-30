import React, { useContext } from "react";
import { Container } from "react-bootstrap";

import MainForm from "../components/AddPosts/MainForm";
import MainTitle from "../components/AddPosts/MainTitle";

import { database } from "../firebase.config";
import { ref, update, push, child } from "firebase/database";
import { AuthContext } from "../store";
import { useHistory, Redirect } from "react-router-dom";

import moment from "moment/moment";

const AddPost = () => {
  const { currentUser } = useContext(AuthContext);

  const currentDate = moment().format("MMMM Do YYYY");
  const history = useHistory();

  const addPostHandler = async (title, description) => {
    const uid = currentUser.uid;
    const postId = push(child(ref(database), "posts")).key;
    const post = {
      title,
      description,
      createdOn: currentDate,
    };

    const publicPost = {
      author: currentUser.displayName,
      uid,
      ...post,
    };

    const updates = {};
    updates[`/posts/${postId}`] = publicPost;
    updates[`/user/${uid}/${postId}`] = post;

    try {
      await update(ref(database), updates);
    } catch (err) {
      history.replace("/error");
    }
    history.replace("/home");
  };

  if (!currentUser) {
    return <Redirect to="/home" />;
  }

  return (
    <Container className="mt-3">
      <MainTitle />
      <MainForm onAddPost={addPostHandler} />
    </Container>
  );
};

export default AddPost;
