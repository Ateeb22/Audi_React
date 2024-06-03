import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import { useNavigate } from "react-router-dom";

function App() {
  
  return <div>                                     
  <BrowserRouter>
      <Routes>
        <Route index element={<Login/>} />
         <Route path="/home" element={<Home/>} />                 
      </Routes>
  </BrowserRouter>
{/* <Home/> */}
  </div>;
}

export default App;



// we have defined index element it means it is default the "Home" page will always open.