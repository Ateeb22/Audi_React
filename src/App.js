import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Card from "./pages/Card";
// import Card2 from "./pages/Card2";
import Service from "./pages/Service";

function App() {
  return <div>                                     
  {/* <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
         <Route path="/home" element={<Home/>} />
         <Route path="/service" element={<Service/>} />

      </Routes>
  </BrowserRouter> */}
<Home/>
  </div>;
}

export default App;



// we have defined index element it means it is default the "Home" page will always open.