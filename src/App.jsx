import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './containers/Home';
import Login from './containers/Login';
import Notes from './containers/Notes';
import PublicRoute from './PublicRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoute component={Home} />} />
        <Route path="/notes" element={<PublicRoute component={Notes} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
