import React from 'react';

import { useSelector } from 'react-redux';

const Home = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <div>
      <h1>Home</h1>
      <div>
        <span>User: {user.email}</span>
      </div>
    </div>
  );
};

export default Home;
