import { Container, Row, Col, Image } from "react-bootstrap";

function Card2() {
  return (
    <>
      <Container className="he">
        <Row>
          <Col>
            <Image src="blacky-bill.jpg" className="round" thumbnail />
          </Col>
          <Col>
            <h1 id="txt" className="p-2">
              Pioneering design icon
            </h1>
            <h4 id="mid" className="p-2">
              Audi epitomizes automotive elegance, blending sleek design with
              timeless sophistication.
            </h4>
            <h5 id="bot" className="p-2">
              Each Audi model is a masterpiece of engineering attention Details.
              Behind the wheel of an Audi, every journey becomes an experience
              of luxury and refinement. Audi's commitment to innovation ensures
              that each vehicle is equipped with cutting-edge technology for a
              seamless driving experience. From powerful performance to
              luxurious comfort, Audi seamlessly integrates style and substance
              in every car they produce.
            </h5>
          </Col>
        </Row>

        <Row>
          <Col>
            <h1 id="txt" className="p-2">
            The Art Technology
            </h1>
            <h4 id="mid" className="p-2">
            Audi's legacy is not just in their vehicles, but in the memories created behind the wheel.
            </h4>
            <h5 id="bot" className="p-2">
            Audi's legacy is one of unparalleled engineering prowess, where every model stands as a testament 
            to meticulous attention to detail and uncompromising craftsmanship.
             Behind the wheel of an Audi, each journey is transformed into an extraordinary experience, 
             where luxury and refinement converge seamlessly. Rooted in a relentless pursuit of innovation,
              Audi ensures that each vehicle is equipped with cutting-edge technology,
               setting new standards for the modern driving experience.
            </h5>
          </Col>
          <Col>
            <Image src="light-bill.jpg" className="round" thumbnail />
          </Col>
        </Row>


        <Row>      
          <Col>
            <Image src="black-bill.jpg" className="round" thumbnail />
          </Col>
          <Col>
            <h1 id="txt" className="p-2">
            The Art Technology
            </h1>
            <h4 id="mid" className="p-2">
            Audi's legacy is not just in their vehicles, but in the memories created behind the wheel.
            </h4>
            <h5 id="bot" className="p-2">
            Audi's legacy is one of unparalleled engineering prowess, where every model stands as a testament 
            to meticulous attention to detail and uncompromising craftsmanship.
             Behind the wheel of an Audi, each journey is transformed into an extraordinary experience, 
             where luxury and refinement converge seamlessly. Rooted in a relentless pursuit of innovation,
              Audi ensures that each vehicle is equipped with cutting-edge technology,
               setting new standards for the modern driving experience.
            </h5>
          </Col>     
        </Row>
      </Container>

      {/* <Col xs={6} md={4}>
          <Image src="black-bill.jpg" className="round"  roundedCircle />
        </Col> */}
    </>
  );
}

export default Card2;
