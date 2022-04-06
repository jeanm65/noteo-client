import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './containers/Home';
import Login from './containers/Login';
// import LoginWithFOrmikHook from './containers/LoginWithFormikHook';
import Notes from './containers/Notes';
import PublicRoute from './PublicRoute';

const MainRoutes = () => {
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

export default MainRoutes;
