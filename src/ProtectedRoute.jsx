import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isValidToken } from './services/commonsServices';

const ProtectedRoute = () => {
  const isAuthenticated = isValidToken();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;