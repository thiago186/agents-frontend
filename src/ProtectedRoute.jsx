import React, { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isValidToken } from './services/commonsServices';

const ProtectedRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  
  useEffect(() => {
    const checkToken = async () => {
      try {
        const validToken = await isValidToken();
        console.log('Valid token:', validToken);
        setIsAuthenticated(validToken);
      } catch (error) {
        console.error('Error checking token:', error);
        setIsAuthenticated(false);
      }
    };

    checkToken();
  }, []);

  if (isAuthenticated === null) {
    return <h1>Carregando...</h1>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;