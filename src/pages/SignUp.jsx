import React, { useContext } from "react";

import SignUpHeader from "../components/SignUp/SignUpHeader";
import SignUpForm from "../components/SignUp/SignUpForm";
import FlexCard from "../components/UI/FlexCard";

import { auth } from "../firebase.config";

import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import AuthSpinner from "../components/UI/AuthSpinner";
import { updateProfile } from "firebase/auth";

import { AuthContext } from "../store";

import { useHistory } from "react-router-dom";
import NotFound from "./NotFound";

export default function SignUp() {
  const [createUserWithEmailAndPassword, _, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const history = useHistory();

  const { login, currentUser } = useContext(AuthContext);

  const signUpHandler = async (username, email, password) => {
    const user = await createUserWithEmailAndPassword(email, password);
    await updateProfile(user.user, {
      displayName: username,
    });

    login(user.user);
    history.replace("/home");
  };

  if (loading) {
    return <AuthSpinner />;
  }

  if (currentUser) {
    return <NotFound />;
  }

  // console.log(error?.code);
  return (
    <FlexCard>
      <SignUpHeader />
      <SignUpForm onSubmit={signUpHandler} firebaseError={error?.code} />
    </FlexCard>
  );
}
