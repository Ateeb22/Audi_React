// import React, { useContext } from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import AuthContext from './AuthContext';


// const PublicRoute = () => {
//   const { isAuthenticated } = useContext(AuthContext);

//   return isAuthenticated ? <Navigate to="/home" /> : <Outlet />;
// };

// export default PublicRoute;




// import React, { useContext } from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import AuthContext from './AuthContext';

// const PublicRoute = () => {
//   const { isAuthenticated } = useContext(AuthContext);
//   console.log("PublicRoute, isAuthenticated:", isAuthenticated);

//   return isAuthenticated ? <Navigate to="/home" /> : <Outlet />;
// };

// export default PublicRoute;




import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from './AuthContext';

const PublicRoute = () => {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) {
    console.log("PublicRoute, isAuthenticated:", isAuthenticated);
    return <Navigate to="/home" />;
  }

  return <Outlet />;
};

export default PublicRoute;
