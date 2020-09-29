import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import './auth.css';

import { Link, Redirect} from 'react-router-dom'

import { registration } from '../../redux'

export class Registration extends Component {

  render() {

    let redirect = <Redirect
      to={{
        pathname: "/"
      }}
    />;

    const initialValues = {
      email: '',
      password: '',
    }
    
    const validationSchema = Yup.object({
      email: Yup.string().email('Invalid email format').required("Required"),
      password: Yup.string().min(6, 'Too Short!').required("Required"),
    })
    
    const onSubmit = values => {
      this.props.registration(values);
    }

    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {(formik) => (
          <>
            {this.props.authData.isLoggedIn ? redirect : null}
            <Form className="login-form">
              <h2>Register</h2>
              <div className="form-control">
                <label htmlFor='email'>E-mail</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage name='email'>
                  { ErrorMessage => <div className="error">{ErrorMessage}</div> }
                </ErrorMessage>
              </div>
      
              <div className="form-control">
                <label htmlFor='password'>Password</label>
                <Field type="text" id="password" name="password" />
                <ErrorMessage name='password'>
                  {
                    ErrorMessage => <div className="error">{ErrorMessage}</div>
                  }
                </ErrorMessage>
              </div>
      
              <button type="submit" disabled={!(formik.dirty && formik.isValid)}>Sign Up</button>
              <Link to="/Login" className="redirect-link">Login</Link>
            </Form>
          </>
        )}
      </Formik>
    )
  }
}

const mapStateToProps = (state) => ({
  authData: state.authData
})

const mapDispatchToProps = dispatch => {
  return {
    registration: (creds) => dispatch(registration(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)
