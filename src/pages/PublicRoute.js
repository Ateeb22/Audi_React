import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from './AuthContext';


const PublicRoute = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? <Navigate to="/home" /> : <Outlet />;
};

export default PublicRoute;
