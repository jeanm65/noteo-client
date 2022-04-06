import React from 'react';

import LoginForm from '../LoginForm';

const Login = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="titleContainer">
          <h2>LOGIN</h2>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
