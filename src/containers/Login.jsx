import { React } from 'react';

import { Formik } from 'formik';
import * as Yup from 'yup';

  const onSubmit = () => {
    console.log(JSON.stringify(values, null, 2));
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required('Email is required'),

    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password is too short - should be 6 chars minimum'),
  });

const Login = () => (
  <Formik
    initialValues={{
        email: '',
        password: '',
        rememberMe: true,
      }}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  >
    {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
        } = props;
        return (
          <div className="container">
            <form onSubmit={onSubmit}>
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
          </div>
        );
      }}
  </Formik>
);

export default Login;
