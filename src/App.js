
import React from 'react';

const App = () => {
  return (
    <div>
      Hello from <b>{process.env.REACT_APP_MY_ENV}</b>
    </div>
  );
};

export default App;
