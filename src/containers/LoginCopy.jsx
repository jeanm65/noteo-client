import React from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginCopy = () => {
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
      <form onSubmit={formik.handleSubmit}>
        <div className="card">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.mail && formik.errors.mail ? (
            <p>{formik.errors.mail}</p>
          ) : null}

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
            <p>{formik.errors.password}</p>
          ) : null}
          <label htmlFor="checkbox">Remember Me</label>
          <input
            id="rememberMe"
            name="rememberMe"
            type="checkbox"
            onChange={handleChange}
            value={formik.values.checked}
          />

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginCopy;
