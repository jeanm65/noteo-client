import { useState } from 'react';
import './styles/loginStyle.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './containers/Home';
import Login from './containers/Login';
import Notes from './containers/Notes';
import PublicRoute from './PublicRoute';

const App = () => {
  const [values, setValues] = useState({
    mail: '',
    password: '',
  });
  const [checkValue, setCheckValue] = useState(true);
  const inputs = [
    {
      id: 1,
      name: 'mail',
      errorMessage: 'The email is not valid',
      type: 'mail',
      label: 'Email',
      pattern: '/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/',
      required: true,
    },
    {
      id: 2,
      name: 'password',
      errorMessage: 'Password should be minimum eight characters, at least one uppercase letter, one lowercase letter and one number:',
      type: 'password',
      label: 'Password',
      pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
      required: true,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = () => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const checkOnchange = (e) => {
    setCheckValue(e.currentTarget.checked);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoute component={Home} />} />
        <Route path="/notes" element={<PublicRoute component={Notes} />} />
        <Route
          path="/login"
          element={
            <div className="form">
              <form onSubmit={handleSubmit}>
                <h2>LOGIN</h2>
                {inputs.map((input) => (
                  <Login
                    key={input.id}
                    {...input}
                    value={values[input]}
                    onChange={onChange}
                  />
                  ))}
                <div className="check">
                  <input type="checkbox" name="checkbox" id="3" value={checkValue} onChange={checkOnchange} />
                  <label htmlFor="checkbox">Remember me?</label>
                </div>
                <div className="submit">
                  <input type="submit" value="LOGIN" />
                </div>
                <h4>Forgot password ?</h4>
                <h5>OR</h5>
              </form>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
