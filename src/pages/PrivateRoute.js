import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

const PrivateRoute = () => {
 
   let loggedin = false;

   if(loggedin){
    return <Outlet/>
   }
    else{
         return <Navigate to={"/login"} />
    }
   

    // return loggedin ? <Outlet/> : <Navigate to={"/login"} />               // ALTERNATE CONDITION

}

export default PrivateRoute

