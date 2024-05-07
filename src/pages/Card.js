import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
// import CardData from "../Json_data/Card_data.json";
// import { useEffect } from "react";

function GridExample() {
  // useEffect(() => {
  //   console.log(CardData)
  // },[]) 
  // return (

  
  const cardData = [
    {
      id: 1,
      imageSrc: 'blue-audi.jpg',
      title: 'Audi-e-Tron',
      description: 'The Audi e-tron represents the pinnacle of electric vehicle innovation, offering a harmonious blend of cutting-edge technology.',
      lastUpdated: 'Last updated 30 mins ago'
    },
    {
      id: 2,
      imageSrc: 'red-audi.jpg',
      title: 'Audi SportBack',
      description: 'The Audi e-tron Sportback merges sleek, aerodynamic design with the electrifying performance of an all-electric powertrain.',
      lastUpdated: 'Last updated 29 mins ago'
    },
    {
      id: 3,
      imageSrc: 'green-audi.jpg',
      title: 'Audi S3 Sedan',
      description: 'The Audi S3 Sedan exudes sporty sophistication, combining exhilarating performance with luxurious comfort and cutting-edge technology',
      lastUpdated: 'Last updated 40 min ago'
    },
    {
      id: 4,
      imageSrc: 'black-audi.jpg',
      title: 'Audi A3 Saloon',
      description: 'The Audi A3 Saloon epitomizes compact luxury, delivering a perfect balance of refined elegance, advanced technology.',
      lastUpdated: 'Last updated 10 min ago'
    }
    
  ];

  return (
    <Container className="ca">
      <Row xs={1} md={2} className="g-4">
        {cardData.map(card => (
          <Col key={card.id} >
            <Card className="card1">
              <Card.Img variant="top" src={card.imageSrc} className="border border-dark" />
              <div className="carousel-overlay2"></div>
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small>{card.lastUpdated}</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
 








    // <Container className="ca">
    //   <Row>
    //       <Col md={6} xs={12} lg={6} xl={6} sm={12}>
    //         <Card className="card1">
    //           <Card.Img
    //             variant="top"
    //             src="red-audi.jpg"
    //             class="border border-dark"
    //           />
    //           <div className="carousel-overlay2"></div>
    //           <Card.Body>
    //             <Card.Title>Audi SportBack</Card.Title>
    //             <Card.Text>
    //               The Audi e-tron Sportback merges sleek, aerodynamic design
    //               with the electrifying performance of an all-electric
    //               powertrain.
    //             </Card.Text>
    //           </Card.Body>
    //           <Card.Footer>
    //             <small>Last updated 29 mins ago</small>
    //           </Card.Footer>
    //         </Card>
    //       </Col>
    //   </Row>
    // </Container>
  );
}

export default GridExample;
