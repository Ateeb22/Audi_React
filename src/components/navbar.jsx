// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// // import { SiAudi } from "react-icons/si";
// import Search from "../pages/Search";
// import { Button } from "react-bootstrap";
// import Spinner from 'react-bootstrap/Spinner';
// import './SpinnerLogo.css';
// import { useNavigate } from "react-router-dom";


// function HeadNavbar() {

//   const Navigate = useNavigate();
//   const handlelogout = () => {
//     Navigate("/login")
//     localStorage.removeItem("token");
//   }

//   return (
//     <Container>
//       <Navbar className="nav-container">
//         <Row className="nav-row">
//           <Col
//             sm={12}
//             md={2}
//             xs={12}
//             lg={2}
//             className="d-flex align-items-center"
//           >
//          <div className="spinner-logo">
//       <Spinner animation="border" variant="primary" className="ring" />
//       <Spinner animation="border" variant="danger" className="ring" />
//       <Spinner animation="border" variant="danger" className="ring" />
//       <Spinner animation="border" variant="primary" className="ring" />
//     </div>
//             {/* <SiAudi className="call" /> */}
//           </Col>
//           <Col
//             sm={12}
//             md={4}
//             xs={12}
//             lg={5}
//             className="d-flex align-items-center"
//           >
//             <Nav className="me-auto">            
//               <Nav.Link href="#home">Home</Nav.Link>
//               <Nav.Link href="#service">Services</Nav.Link>            
//               <Nav.Link href="#pricing">Pricing</Nav.Link>
//               <Nav.Link href="#contact">Contact</Nav.Link>
//               <Nav.Link href="#about">About Us</Nav.Link>
       
//             </Nav>
//           </Col>
//           <Col
//             sm={12}
//             md={5}
//             xs={12}
//             lg={4}
//             className="d-flex align-items-center"
//           >
//             <Search />
            
//           </Col>

//           <Col className="d-flex justify-content-around"
//           sm={12}
//           md={1}
//           xs={12}
//           lg={1}>

//           <Button onClick={handlelogout} variant="danger">LogOut</Button>
//           </Col>
//         </Row>
//       </Navbar>
//     </Container>
//   );
// }

// export default HeadNavbar;




// src/components/Navbar.jsx
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import AuthContext from "../pages/AuthContext";
import Search from "../pages/Search";
import Spinner from 'react-bootstrap/Spinner';
import './SpinnerLogo.css';

function HeadNavbar() {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Container>
      <Navbar className="nav-container">
        <Row className="nav-row">
          <Col
            sm={12}
            md={2}
            xs={12}
            lg={2}
            className="d-flex align-items-center"
          >
            <div className="spinner-logo">
              <Spinner animation="border" variant="primary" className="ring" />
              <Spinner animation="border" variant="danger" className="ring" />
              <Spinner animation="border" variant="danger" className="ring" />
              <Spinner animation="border" variant="primary" className="ring" />
            </div>
          </Col>
          <Col
            sm={12}
            md={4}
            xs={12}
            lg={5}
            className="d-flex align-items-center"
          >
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#service">Services</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
            </Nav>
          </Col>
          <Col
            sm={12}
            md={5}
            xs={12}
            lg={4}
            className="d-flex align-items-center"
          >
            <Search />
          </Col>
          <Col
            className="d-flex justify-content-around"
            sm={12}
            md={1}
            xs={12}
            lg={1}
          >
            <Button onClick={handleLogout} variant="danger">
              LogOut
            </Button>
          </Col>
        </Row>
      </Navbar>
    </Container>
  );
}

export default HeadNavbar;

