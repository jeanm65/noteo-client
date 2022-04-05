import React from 'react';

import { Formik } from 'formik';
import * as Yup from 'yup';

const Login = () => (
  <div className="container">
    <Formik
      initialValues={{
        email: '',
        password: '',
        rememberMe: '',
      }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email().required('Required'),
        password: Yup.string().required('Required'),
      })}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleSubmit,
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <div className="card">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {touched.email && errors.email ? <div>{errors.email}</div> : null}

              <label htmlFor="password">Email Address</label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {touched.password && errors.password ? (
                <div>{errors.email}</div>
              ) : null}

              <label htmlFor="checkbox">Remember Me</label>
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                onChange={handleChange}
                value={values.checked}
              />

              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </form>
        );
      }}
    </Formik>
  </div>
);

export default Login;
