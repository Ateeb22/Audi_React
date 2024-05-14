import { Container, Button, Col, Card, Row, Modal } from "react-bootstrap";
import CardData from "../Json_data/Card_data.json";
import { useState } from "react";
import { useEffect } from "react";

function GridExample() {
  const [show, setShow] = useState(false);
  const [getData, SetData] = useState([]);
  const [getModalData, SetDataModalData] = useState({});

  useEffect(() => {
    SetData(CardData);
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    console.log(id);
    const filteredData = getData.filter((item) => item.id === id);
    SetDataModalData(filteredData[0]);
  };

  // return (

  // const cardData = [
  //   {
  //     id: 1,
  //     imageSrc: "blue-audi.jpg",
  //     title: "Audi-e-Tron",
  //     description:
  //       "The Audi e-tron represents the pinnacle of electric vehicle innovation, offering a harmonious blend of cutting-edge technology.",
  //     lastUpdated: "Last updated 30 mins ago",
  //   },
  //   {
  //     id: 2,
  //     imageSrc: "red-audi.jpg",
  //     title: "Audi SportBack",
  //     description:
  //       "The Audi e-tron Sportback merges sleek, aerodynamic design with the electrifying performance of an all-electric powertrain.",
  //     lastUpdated: "Last updated 29 mins ago",
  //   },
  //   {
  //     id: 3,
  //     imageSrc: "green-audi.jpg",
  //     title: "Audi S3 Sedan",
  //     description:
  //       "The Audi S3 Sedan exudes sporty sophistication, combining exhilarating performance with luxurious comfort and cutting-edge technology",
  //     lastUpdated: "Last updated 40 min ago",
  //   },
  //   {
  //     id: 4,
  //     imageSrc: "black-audi.jpg",
  //     title: "Audi A3 Saloon",
  //     description:
  //       "The Audi A3 Saloon epitomizes compact luxury, delivering a perfect balance of refined elegance, advanced technology.",
  //     lastUpdated: "Last updated 10 min ago",
  //   },
  // ];

  return (
    <Container className="ca">
      <Row xs={1} md={2} lg={2} sm={1} className="g-4">
        {getData.map((card) => (
          <Col key={card.id}>
            <Card>
              <Card.Img
                variant="top"
                src={card.imageSrc}
                className="border border-dark"
              />
              {/* <div className="carousel-overlay2"></div> */}
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
              </Card.Body>
              <Button
                className="d-flex justify-content-center"
                id="but"
                variant="primary"
                onClick={() => handleShow(card.id)}
              >
                Specification
              </Button>
              <Card.Footer className="d-flex justify-content-center">
                <small>{card.lastUpdated}</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>{getModalData.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{getModalData.info}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleClose}>
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default GridExample;
