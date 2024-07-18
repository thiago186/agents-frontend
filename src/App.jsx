import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import LoggedPage from './pages/LoggedPage';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Test from './pages/test';
import TestPage from './pages/testl';
import ProtectedRoute from './ProtectedRoute';
import OrganizationProvider from './contexts/organizationContext';

const App = () => {
  return (
    <OrganizationProvider>

      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Navbar />
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/logged" element={<LoggedPage />} />
            <Route path="/test" element={<Test />} />
            <Route path="/testl" element={<TestPage />} />
          </Route>
        </Routes>
      </Router>
    </OrganizationProvider>
  );
};

export default App;