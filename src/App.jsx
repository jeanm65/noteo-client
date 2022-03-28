import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Pages/Home";
import About from "./containers/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="*" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
