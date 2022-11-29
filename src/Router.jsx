import React from "react";
import { Redirect, Switch, Route } from "react-router";

import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import Posts from "./pages/Posts";

export default function Router() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <Home />
      </Route>

      <Route path="/login">
        <Login />
      </Route>
      <Route path="/sign-up">
        <SignUp />
      </Route>

      <Route path="/posts">
        <Posts />
      </Route>

      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}
