import React, { useContext } from "react";

import NotLoggedInMainTitle from "../components/Home/NotLoggedIn/MainTitle";
import LoggedInMainTitle from "../components/Home/LoggedIn/MainTitle";
import PostList from "../components/Home/LoggedIn/PostList";
import PostActions from "../components/Home/LoggedIn/PostActions";
import AddPost from "./AddPost";
import PostSpinner from "../components/UI/PostSpinner";

import { Link, Route, Switch, Redirect } from "react-router-dom";
import { AuthContext } from "../store";
import { Container } from "react-bootstrap";

import { useObject } from "react-firebase-hooks/database";

import { ref } from "firebase/database";
import { database } from "../firebase.config";
import EditPost from "./EditPost";

export default function Home() {
  const { currentUser } = useContext(AuthContext);

  const [snapshot, loading, error] = useObject(
    ref(database, `user/${currentUser?.uid}`)
  );

  if (error) {
    return <Redirect to="/error" />;
  }

  if (!currentUser) {
    return (
      <div className="background text-center">
        <NotLoggedInMainTitle />
        <Link to="/sign-up" className="btn btn-primary">
          Create an Account
        </Link>
      </div>
    );
  }
  return (
    <>
      <Switch>
        <Route path="/home" exact>
          {loading ? (
            <PostSpinner />
          ) : (
            <Container className="mt-3">
              <LoggedInMainTitle />
              <PostActions />
              <PostList posts={snapshot?.val()} />
            </Container>
          )}
        </Route>
        <Route path="/home/add-post">
          <AddPost />
        </Route>
        <Route path="/home/edit-post/:uid/:id">
          <EditPost />
        </Route>
      </Switch>
    </>
  );
}
