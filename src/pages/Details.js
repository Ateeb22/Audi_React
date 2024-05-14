import { Col, Container, Row } from "react-bootstrap";



function Details() {
  return (
    <Container className="de">
      <Row>
        <Col lg={12} md={12} sm={8} xs={12}>
          <h1 class="d-flex justify-content-around">
            Each Audi model is a masterpiece of engineering attention Details.
          </h1>
          <div class="p-2">
            <h3 class="d-flex justify-content-around" id="h-4">
              From powerful performance to luxurious Comfort
            </h3>
          </div>     

        </Col>
      </Row>
    </Container>
  );
}

export default Details;
