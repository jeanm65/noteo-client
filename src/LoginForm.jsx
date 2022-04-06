import { React } from 'react';
import './styles.css';

import { Formik } from 'formik';

import { loginValidationSchema } from './utils/validation';

const initialValues = {
  email: '',
  password: '',
  rememberMe: true,
};

const LoginForm = () => {
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
          handleBlur,
        }) => {
          return (
            <form onSubmit={onSubmit} className="form">
              <div className="formControl">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="field"
                />
                {touched.email && errors.email ? <span className="errorMessage">{errors.email}</span> : null}
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
                  className="field"
                />
                {touched.password && errors.password ? (
                  <span className="errorMessage">{errors.email}</span>
                ) : null}
              </div>
              <div className="formControl checkboxContainer">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  onChange={handleChange}
                  value={values.checked}
                  className="checkboxInput"
                />
                <label htmlFor="checkbox">Remember Me</label>
              </div>

              <div className="formControl buttonContainer">
                <button type="submit" disabled={isSubmitting} className="button">
                  Submit
                </button>
              </div>

            </form>
                     );
                    }}
    </Formik>
              );
            };

            export default LoginForm;
