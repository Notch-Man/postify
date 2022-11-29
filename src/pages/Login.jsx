import React, { useContext } from "react";

import LoginForm from "../components/Login/LoginForm";
import LoginHeader from "../components/Login/LoginHeader";

import NotFound from "./NotFound";

import FlexCard from "../components/UI/FlexCard";
import AuthSpinner from "../components/UI/AuthSpinner";

import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { AuthContext } from "../store";

import { auth } from "../firebase.config";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [signInWithEmailAndPassword, _, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const { login } = useContext(AuthContext);
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();

  const loginHandler = async (email, password) => {
    const user = await signInWithEmailAndPassword(email, password);
    login(user.user);

    history.push("/home");
  };

  console.log(error?.code);

  if (loading) {
    return <AuthSpinner />;
  }

  if (currentUser) {
    return <NotFound />;
  }

  return (
    <FlexCard>
      <LoginHeader />
      <LoginForm onSubmit={loginHandler} firebaseError={error?.code} />
    </FlexCard>
  );
}
