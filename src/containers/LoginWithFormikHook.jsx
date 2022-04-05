import React from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginWithFOrmikHook = () => {
  const formik = useFormik({
    initialValues: {
      mail: '',
      password: '',
      rememberMe: true,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .min(8, 'must be 8 caracters or more')
        .email('invalid email address')
        .required('Required'),
      password: Yup.string()
        .min(8, 'must be 8 caracters or more')
        .required('Required'),
      rememberMe: Yup.checked(),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="container">
      <div className="card">
        <form onSubmit={formik.handleSubmit} className="form">
          <div className="formControl">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.mail}
            />
            {formik.touched.mail && formik.errors.mail ? (
              <span className="erroMessage">{formik.errors.mail}</span>
            ) : null}
          </div>

          <div className="formControl">
            <label htmlFor="password">Email Address</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <span className="erroMessage">{formik.errors.password}</span>
            ) : null}
          </div>

          <div className="formControl checkboxContainer">
            <label htmlFor="checkbox">Remember Me</label>
            <input
              id="rememberMe"
              name="rememberMe"
              type="checkbox"
              onChange={handleChange}
              value={formik.values.checked}
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
};

export default LoginWithFOrmikHook;
