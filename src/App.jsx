
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './Pages/Home';
import Notes from './Pages/Notes';

const App = () => {
  return (
    
      <Router>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/Notes' element={<Notes />}/>
                <Route path='*' element={<Home />}/>
            </Routes>
        </Router>
    );
};

export default App;
