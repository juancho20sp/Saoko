import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// Routes
import { routes } from '../../utils/routes/routes';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = false;

  // $
  console.log(`Is logged in: ${isLoggedIn}`);

  return isLoggedIn ? <Outlet /> : <Navigate to={routes.login.path} replace />;
};

export default ProtectedRoute;
