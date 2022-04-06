import { React } from 'react';
import '../styles.css';

import {
 Formik, Form, Field, ErrorMessage,
} from 'formik';

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
      {({ isSubmitting }) => (
        <div className="container">
          <div className="card">
            <div className="titleContainer">
              <h2>LOGIN</h2>
            </div>
            <Form className="form">
              <div className="formControl">
                <label>Email</label>
                <Field type="email" name="email" className="field" />
                <ErrorMessage name="email" component="span" className="errorMessage" />
              </div>

              <div className="formControl">
                <label>Mot de passe</label>
                <Field type="password" name="password" className="field" />
                <ErrorMessage name="password" component="span" className="errorMessage" />
              </div>

              <div className="formControl checkboxContainer">
                <input type="checkbox" name="rememberMe" defaultChecked className="checkboxInput" />
                <label htmlFor="checkbox">Remember me?</label>
              </div>

              <div className="formControl buttonContainer">
                <button type="submit" disabled={isSubmitting} className="button">
                  Submit
                </button>
              </div>
            </Form>
          </div>
        </div>

       )}
    </Formik>
  );
};

export default Login;
