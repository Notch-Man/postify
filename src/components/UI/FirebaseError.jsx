import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

const FirebaseError = ({ errorCode }) => {
  switch (errorCode) {
    case "auth/email-already-in-use":
      return (
        <>
          <Form.Text className="text-danger fs-6 mb-2">
            Email is already in use.
          </Form.Text>
          <br />
        </>
      );

    case "auth/wrong-password":
      return (
        <>
          <Form.Text className="text-danger fs-6 mb-2">
            Wrong Password
          </Form.Text>
          <br />
        </>
      );

    case "auth/user-not-found":
      return (
        <>
          <Form.Text className="text-danger fs-6 mb-2">
            User not found!
          </Form.Text>
          <br />
        </>
      );

    case "auth/claims-too-large":
      return (
        <>
          <Form.Text className="text-danger fs-6 mb-2">
            You have been sending too many requests, try again later!
          </Form.Text>
          <br />
        </>
      );
    default:
      return;
  }
};

FirebaseError.propTypes = {
  errorCode: PropTypes.string,
};
export default FirebaseError;
