import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoggedPage from './pages/LoggedPage';
import HomePage from './pages/HomePage';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/logged" element={<LoggedPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
