import React from "react";
import { Formik } from "formik";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import LoginSchema from "../../schema/LoginSchema";
import FirebaseError from "../UI/FirebaseError";

const LoginForm = ({ onSubmit, firebaseError }) => {
  const submitHandler = ({ email, password }) => {
    onSubmit(email, password);
  };
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={submitHandler}
        validationSchema={LoginSchema}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          handleBlur,
          errors,
          touched,
        }) => {
          return (
            <Form onSubmit={handleSubmit}>
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
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.password && errors.password}
                />
                {touched.password && errors.password && (
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
              <FirebaseError errorCode={firebaseError} />
              <Link to="/sign-up">Don't have an account? Sign Up!</Link>
              <br />
              <Button variant="success" type="submit" className="mt-2">
                Login
              </Button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  firebaseError: PropTypes.string,
};

export default LoginForm;
