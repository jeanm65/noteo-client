
import React from 'react';

const App = () => {
  return (
    <div>
      Hello from <b>{process.env.REACT_APP_KEY_TEST}</b>
    </div>
  );
};

export default App;
