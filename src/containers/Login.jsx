import { useState } from 'react';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [errors, setErrors] = useState({
    mail: '',
    password: '',
  });

  // const [checkValue, setCheckValue] = useState(true);
  const handleSubmit = (e) => {
    console.log('values', values);
    e.preventDefault();
  };

  const onChange = () => {
    if (!e.target.value) {
      setErrors({ ...errors, [e.target.name]: e.target.value });
    }
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const checkOnchange = (e) => {
    setValues({ ...values, rememberMe: e.currentTarget.checked });
  };

  return (
    <div className="container">
      <div className="card">
        <div className="titleContainer">
          <h2>LOGIN</h2>
        </div>
        <form onSubmit={handleSubmit} className="form">
          <div className="formControl">
            <label>Email</label>
            <input
              name="email"
              type="email"
              value={values.email}
              onChange={onChange}
              className="field"
            />
            {errors.email && <span className="errorMessage">{errors.email}</span>}
          </div>

          <div className="formControl">
            <label>Mot de passe</label>
            <input
              name="password"
              type="password"
              value={values.password}
              onChange={onChange}
              className="field"
            />
            {errors.password && <span className="errorMessage">{errors.password}</span>}
          </div>

          <div className="formControl checkboxContainer">
            <input type="checkbox" name="checkbox" value={values.rememberMe} onChange={checkOnchange} className="checkboxInput" />
            <label htmlFor="checkbox">Remember me?</label>
          </div>

          <div className="formControl buttonContainer">
            <input type="submit" value="LOGIN" className="button" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
