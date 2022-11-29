import React from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";

import SignUpSchema from "../../schema/SignUpSchema";

import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import FirebaseError from "../UI/FirebaseError";

const SignUpForm = ({ onSubmit, firebaseError }) => {
  const submitHandler = ({ username, email, password }) => {
    onSubmit(username, email, password);
  };
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
      }}
      validationSchema={SignUpSchema}
      onSubmit={submitHandler}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => {
        return (
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username" className="mb-3">
              <Form.Control
                placeholder="Username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.username && errors.username}
              />
              {touched.username && errors.username && (
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group controlId="email" className="mb-3">
              <Form.Control
                placeholder="Email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.email && errors.email}
              />
              {touched.email && errors.email && (
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group controlId="password" className="mb-4">
              <Form.Control
                placeholder="Password"
                type="password"
                value={values.password}
                isInvalid={touched.password && errors.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.password && errors.password && (
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <FirebaseError errorCode={firebaseError} />
            <Link to="/login">Already have an account? Login!</Link>
            <br />
            <Button variant="success" type="submit" className="mt-2">
              Sign Up
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

SignUpForm.propTypes = {
  onSubmit: PropTypes.func,
  firebaseError: PropTypes.string,
};

export default SignUpForm;
