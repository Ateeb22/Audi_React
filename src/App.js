import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute";
// import { useNavigate } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />

            <Route path="/user" element={<PrivateRoute />}>
            <Route path="home" element={<Home />} />
            </Route>
            
        </Routes>
      </BrowserRouter>
      {/* <Home/> */}
    </div>
  );
}

export default App;

// we have defined index element it means it is default the "Home" page will always open.
