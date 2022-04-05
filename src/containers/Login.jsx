import { React } from 'react';

import { Formik } from 'formik';

import { loginValidationSchema } from '../utils/validation';

const initialValues = {
  email: '',
  password: '',
  rememberMe: true,
};

const Login = () => {
  const onSubmit = (values) => {
    console.log('values', values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={loginValidationSchema}
    >
      {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
        }) => {
          return (
            <div className="container">
              <div className="card">
                <form onSubmit={onSubmit}>
                  <div className="formControl">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {touched.email && errors.email ? <span className="erroMessage">{errors.email}</span> : null}
                  </div>

                  <div className="formControl">
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
                      <span className="erroMessage">{errors.email}</span>
                ) : null}
                  </div>

                  <div className="formControl checkboxContainer">
                    <label htmlFor="checkbox">Remember Me</label>
                    <input
                      id="rememberMe"
                      name="rememberMe"
                      type="checkbox"
                      onChange={handleChange}
                      value={values.checked}
                      className="checkboxInput"
                    />
                  </div>

                  <button type="submit" disabled={isSubmitting} className="button">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          );
        }}
    </Formik>
  );
};

export default Login;
