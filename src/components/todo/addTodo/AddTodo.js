import React from "react";
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Redirect } from "react-router-dom";

import { addTodo, fetchTodo } from "../../../redux";

import "./addTodo.css";

export const AddTodo = (props) => {
  let redirect = (
    <Redirect
      to={{
        pathname: "/login",
      }}
    />
  );

  const initialValues = {
    task: "",
    completed: false,
    userId: props.authData.userId,
  };

  const validationSchema = Yup.object({
    task: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log(values);
    props.addTodo(values);
    // props.fetchTodo(props.fetchTodo(props.authData.userId));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <>
          {!props.authData.isLoggedIn ? redirect : null}
          <Form className="todo-form">
            <div className="form-control">
              <label htmlFor="email">Add</label>
              <Field type="text" id="task" name="task" />
              <ErrorMessage name="task">
                {(ErrorMessage) => <div className="error">{ErrorMessage}</div>}
              </ErrorMessage>
            </div>

            <button type="submit" disabled={!(formik.dirty)}>Add</button>
          </Form>
        </>
      )}
    </Formik>
  );
};

const mapStateToProps = (state) => ({
  authData: state.authData,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (values) => dispatch(addTodo(values)),
    fetchTodo: (userId) => dispatch(fetchTodo(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
