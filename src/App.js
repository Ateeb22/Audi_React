import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute";
import { AuthProvider } from "./pages/AuthContext";
import PublicRoute from "./pages/PublicRoute";
// import { useNavigate } from "react-router-dom";

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
            <Route path="dashboard" element={<PrivateRoute />} />
            <Route path="about" element={<PrivateRoute />} />
            <Route path="services" element={<PrivateRoute />} />
          </Route>


          {/* <Route path="/" element={<PublicRoute />}>
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="home" element={<Home />} />
            <Route path="user" element={<PrivateRoute />} />
            <Route path="dashboard" element={<PrivateRoute />} />
            <Route path="about" element={<PrivateRoute />} />
            <Route path="services" element={<PrivateRoute />} />
    
          </Route> */}









          {/* <Route path="/home" element={<Home />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="login" element={<PrivateRoute />} />
            <Route path="user" element={<PrivateRoute />} />
            <Route path="dashboard" element={<PrivateRoute />} />
            <Route path="about" element={<PrivateRoute />} />
            <Route path="services" element={<PrivateRoute />} />
          </Route> */}
                  
            
        </Routes>
      </BrowserRouter>
      </AuthProvider>
      {/* <Home/> */}
    </div>
  );
}

export default App;

// we have defined index element it means it is default the "Home" page will always open.

