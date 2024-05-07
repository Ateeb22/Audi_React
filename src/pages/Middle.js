import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function Middle() {
  return (
    <Container className="he">
      <Row>
        <Col lg={12} >
          <div class="d-flex justify-content-around">
          <h1 class="p-2">
            Luxurious exhilarating performance by{" "}
            <Badge bg="primary">Audi</Badge>
          </h1>
          </div>
          <h4 class="d-flex justify-content-around" id="h-4" >
          Redefining the driving experience with every Journey 
          </h4>
        </Col>
      </Row>
    </Container>
  );
}

export default Middle;

// import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/esm/Container";
// // import Container from "react-bootstrap/esm/Container";
// // import Row from "react-bootstrap/esm/Row";
// // import Col from "react-bootstrap/esm/Col";

// function Middle() {
//   return (

//     <Nav justify variant="tabs" defaultActiveKey="/home" className="nav2">
//       <Nav.Item>
//         <Nav.Link href="/home">All Models</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="link-1">Members</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="link-2">Paternship</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="link-3" >
//           Growth
//         </Nav.Link>
//       </Nav.Item>
//     </Nav>

//   );
// }

// export default Middle;

// {/* <Container>
//       <Row>
//         <Nav justify variant="tabs" defaultActiveKey="/home" className="nav2" >
//           <Col xs={3} sm={3} md={2} lg={2}>
//             <Nav.Item>
//               <Nav.Link href="/home">All Models</Nav.Link>
//             </Nav.Item>
//           </Col>
//           <Col xs={3} sm={3} md={4} lg={4} >
//           <Nav.Item>
//             <Nav.Link eventKey="link-1">Members</Nav.Link>
//           </Nav.Item>
//           </Col>
//           <Col xs={3} sm={3} md={4} lg={4} >
//           <Nav.Item>
//             <Nav.Link eventKey="link-2">Paternship</Nav.Link>
//           </Nav.Item>
//           </Col>
//           <Col xs={3} sm={3} md={2} lg={2} >
//           <Nav.Item>
//             <Nav.Link eventKey="Link-2">Growth</Nav.Link>
//           </Nav.Item>
//           </Col>
//         </Nav>
//       </Row>
//     </Container> */}

// {/* <nav class="nav nav-pills flex-column flex-sm-row">
//   <a class="flex-sm-fill text-sm-center nav-link active" href="#">Active</a>
//   <a class="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
//   <a class="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
// </nav> */}
