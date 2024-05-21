import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Card from "./pages/Card";
import Card2 from "./pages/Card2";

function App() {
  return <div>                                     
  <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
         <Route path="/home" element={<Home/>} />
         <Route path="/card" element={<Card/>} />
             

      </Routes>
  </BrowserRouter>

  </div>;
}

export default App;



// we have defined index element it means it is default the "Home" page will always open.