import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './containers2/Home';
import Login from './containers2/Login';
import Notes from './containers2/Notes';
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
