import React from "react";
import PropTypes from "prop-types";

import { Form, Button } from "react-bootstrap";

import EditPostSchema from "../../schema/PostSchema";

import { Formik } from "formik";
import Preview from "./Preview";

const MainForm = ({ onEditPost, defaultValues }) => {
  const submitHandler = ({ title, description }) => {
    onEditPost(title, description);
  };
  return (
    <Formik
      initialValues={defaultValues}
      onSubmit={submitHandler}
      validationSchema={EditPostSchema}
    >
      {({
        values,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        touched,
      }) => (
        <Form className="mt-3" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Control
              placeholder="Title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={touched.title && errors.title}
            />
            {touched.title && errors.title && (
              <Form.Control.Feedback type="invalid">
                {errors.title}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Control
              placeholder="Description"
              as="textarea"
              rows={6}
              value={values.description}
              isInvalid={touched.description && errors.description}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.description && errors.description && (
              <Form.Control.Feedback type="invalid">
                {errors.description}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Preview description={values.description} />
          <Button type="submit" variant="success">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

MainForm.propTypes = {
  onEditPost: PropTypes.func,
  defaultValues: PropTypes.object,
};

export default MainForm;
