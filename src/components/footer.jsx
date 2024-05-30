import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import Accordion from "react-bootstrap/Accordion";

function Footer() {
  return (
    <div className="de" >
      <Card className="text-center" id="ft">
        <Card.Header>
          <h2 id="ff" className="p-2">
            Driving an Audi is an experience where precision meets passion.
          </h2>
        </Card.Header>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h6 className="d-flex justify-content-center" id="fff">
                Audi's commitment to sustainability is equally impressive with
                innovations
              </h6>
            </Accordion.Header>
            <Accordion.Body>
              The essence of Audi is found in its seamless integration of
              advanced technology with timeless elegance. Whether navigating
              city streets or cruising on the open road, Audi's state of the art
              features, such as intuitive infotainment systems and advanced
              driver assistance technologies, enhance the driving experience,
              making it safer and more enjoyable. The powerful engines and
              responsive handling deliver a dynamic performance that thrills
              with every turn.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        {/* <Card.Header>
          
        </Card.Header> */}
        <Card.Body>
          <Row className="mx-auto p-2">
            <Col>
              <Card.Title className="mx-auto p-2">Audi FAQ</Card.Title>
              <Card.Text>
                Your Personal Slave will Serve you at any Cost no matter what
                your query will be !!
              </Card.Text>
              <Form.Control placeholder="Email*" />
              <Button variant="outline-primary" className="ca1">
                Subscribe
              </Button>
            </Col>
            <Col>
              <Card.Title className="mx-auto p-2">Model Overview</Card.Title>
              <Card.Text>All Models</Card.Text>
              <Card.Text>Repair and Service</Card.Text>
              <Card.Text>Audi Genuine Accessories</Card.Text>
            </Col>
            <Col>
              <Card.Title className="mx-auto p-2">Brand</Card.Title>
              <Card.Text>Explanatory Videos</Card.Text>
              <Card.Text>Audi Sport</Card.Text>
              <Card.Text>Audi Quattro</Card.Text>
            </Col>
            <Col>
              <Card.Title className="mx-auto p-2">About us</Card.Title>
              <Card.Text>Importer</Card.Text>
              <Card.Text>Dealership in Pakistan</Card.Text>
            </Col>
          </Row>
        </Card.Body>

        <Card.Footer className="text-muted">
          Copyright © 7NSoft Systems 2024, All rights reserved.
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Footer;
