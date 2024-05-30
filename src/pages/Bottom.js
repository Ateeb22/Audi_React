import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Manufacture from "./Offcanva";
import Image from "react-bootstrap/Image";

function Bottom() {
  return (

      <Container className="vd">
        <Row>
          <Col>
            <h2 id="btf" className="p-2">
              One Of The Nation's Largest Public Fast Charging Networks
            </h2>
            <p id="mo" className="p-2">
              Whenever you want, Wherever you need, you can make your Audi
              Charge from all over the World. Audi isn't just a brand where
              every drive is a celebration of excellence and a testament to the
              passion for pushing boundaries. A German automotive manufacturer of luxury vehicles headquartered in Ingolstadt,
               Bavaria, Germany. Audi produces vehicles in nine production facilities worldwide.
            </p>
            <Manufacture />
          </Col>
          <Col>
            <Image src="map2.jpg" className="round1" roundedCircle />
          </Col>
        </Row>
      </Container>
   
  );
}

export default Bottom;
