// import React, { useContext } from "react";
// import { Outlet, Navigate } from "react-router-dom";
// import AuthContext from "./AuthContext";

// const PrivateRoute = () => {
//   const { isAuthenticated } = useContext(AuthContext);

//   return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
// };

// export default PrivateRoute;




// import React, { useContext } from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import AuthContext from './AuthContext';

// const PrivateRoute = () => {
//   const { isAuthenticated } = useContext(AuthContext);
//   console.log("PrivateRoute, isAuthenticated:", isAuthenticated);

//   return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
// };

// export default PrivateRoute;



import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from './AuthContext';

const PrivateRoute = () => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    console.log("PrivateRoute, isAuthenticated:", isAuthenticated);
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;

