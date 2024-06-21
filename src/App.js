import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute";
import { AuthProvider } from "./pages/AuthContext";
import PublicRoute from "./pages/PublicRoute";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
        <Routes>


         <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="home" element={<Home />} />
            <Route path="user" element={<PrivateRoute />} />
            <Route path="dashboard" element={<PublicRoute />} />
            <Route path="about" element={<PrivateRoute />} />
            <Route path="services" element={<PrivateRoute />} />
          </Route>        

          <Route path="/home" element={<PublicRoute />} >
          <Route path="login" element={<Home />} />
          </Route>
          
          <Route path="*" element={<NotFound />} /> 




{/* <Route path="/" element={<PrivateRoute />}>
            
            <Route path="home" element={<Home />} />
            <Route path="user" element={<Home />} />
            <Route path="dashboard" element={<Home />} />
            <Route path="about" element={<Home />} />
            <Route path="services" element={<Home />} />
          </Route>
          <Route path="/login" element={<PublicRoute />}>
            <Route path="" element={<Home />} />
          </Route>
       <Route path="*" element={<NotFound />} /> */}





            
        </Routes>
      </BrowserRouter>
      </AuthProvider>
      {/* <Home/> */}
    </div>
  );
}

export default App;

// we have defined index element it means it is default the "Home" page will always open.

