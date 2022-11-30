import React, { Suspense } from "react";
import { Redirect, Switch, Route } from "react-router";
import PageSpinner from "./components/UI/PageSpinner";

const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Login"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const SignUp = React.lazy(() => import("./pages/SignUp"));
const Posts = React.lazy(() => import("./pages/Posts"));
const Error = React.lazy(() => import("./pages/Error"));

export default function Router() {
  return (
    <Suspense fallback={<PageSpinner />}>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>

        <Route path="/error">
          <Error />
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
    </Suspense>
  );
}
