import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { SiAudi } from "react-icons/si";
import Search from "../pages/Search";
import Spinner from 'react-bootstrap/Spinner';


function HeadNavbar() {
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
            <Spinner animation="border" variant="primary" />
            <Spinner animation="border" variant="danger" />
            <Spinner animation="border" variant="danger" />
            <Spinner animation="border" variant="primary" />
            {/* <SiAudi className="call" /> */}
          </Col>
          <Col
            sm={12}
            md={6}
            xs={12}
            lg={6}
            className="d-flex align-items-center"
          >
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Services</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="#member">About Us</Nav.Link>
            </Nav>
          </Col>
          <Col
            sm={12}
            md={4}
            xs={12}
            lg={4}
            className="d-flex align-items-center"
          >
            <Search />
          </Col>
        </Row>
      </Navbar>
    </Container>
  );
}

export default HeadNavbar;
