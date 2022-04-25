import { React } from 'react';

import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { login } from '../../actions/auth';
import { loginValidationSchema } from '../../utils/validation';

const initialValues = {
  email: '',
  password: '',
  rememberMe: true,
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (values) => {
    dispatch(login(values));
    navigate('/');
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
          handleSubmit,
        }) => {
          return (
            <form onSubmit={handleSubmit} className="form">
              <div className="formControl">
                <label>Email Address</label>
                <input
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
                <label htmlFor="password">Mot de passe</label>
                <input
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
