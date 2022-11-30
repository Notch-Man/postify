import React, { useContext } from "react";
import { Container } from "react-bootstrap";

import MainTitle from "../components/Posts/MainTitle";
import PostDetail from "./PostDetail";

import { Route, Switch, Redirect } from "react-router-dom";
import { useObject } from "react-firebase-hooks/database";
import { orderByChild, query, ref } from "firebase/database";
import { database } from "../firebase.config";

import PostSpinner from "../components/UI/PostSpinner";
import PostList from "../components/Posts/PostList";
import { AuthContext } from "../store";

export default function Posts() {
  const { currentUser } = useContext(AuthContext);

  const [snapshot, loading, error] = useObject(
    query(ref(database, "posts"), orderByChild("createdOn"))
  );

  if (!currentUser) {
    return <Redirect to="/home" />;
  }

  if (error) {
    return <Redirect to="/error" />;
  }

  return (
    <>
      <Switch>
        {loading ? (
          <PostSpinner />
        ) : (
          <>
            <Route path="/posts" exact>
              <Container className="mt-3">
                <MainTitle />
                <PostList posts={snapshot?.val()} />
              </Container>
            </Route>
            <Route path="/posts/detail/:uid/:id">
              <PostDetail />
            </Route>
          </>
        )}
      </Switch>
    </>
  );
}
