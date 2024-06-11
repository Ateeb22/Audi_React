import { Col, Container, Row } from "react-bootstrap";

function Details() {
  return (
    <Container className="de">
      <Row>
        <Col lg={12} md={12} sm={8} xs={12}>
        <div class="d-flex justify-content-around">
          <h1 class="p-2">
            Each Audi model is a masterpiece of engineering attention
          </h1>
          </div>   
            <h4 class="d-flex justify-content-around" id="h-4">
              From powerful performance to luxurious Comfort
            </h4>       
        </Col>
      </Row>
    </Container>
  );
}

export default Details;
