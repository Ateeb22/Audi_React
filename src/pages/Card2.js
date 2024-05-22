import { Container, Row, Col, Image } from "react-bootstrap";

function Card2(myprops) {
  return (
    <>
      <Container className="he">
        <div class="row mb-5">
          {myprops.isLeft ? (
            <Row>
              <Col>
                <Image src={myprops.imgg} className="round" roundedCircle />
              </Col>
              <Col>
                <h1 id="txt" className="p-2">
                  {myprops.mantxt}
                </h1>
                <h4 id="mid" className="p-2">
                  {myprops.midtxt}
                </h4>
                <h5 id="bot" className="p-2">
                  {myprops.bottxt}
                </h5>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col>
                <h1 id="txt" className="p-2">
                  {myprops.mantxt}
                </h1>
                <h4 id="mid" className="p-2">
                  {myprops.midtxt}
                </h4>
                <h5 id="bot" className="p-2">
                  {myprops.bottxt}
                </h5>
              </Col>
              <Col>
                <Image src={myprops.imgg} className="round" roundedCircle />
              </Col>
            </Row>
          )}
        </div>

        {/* <div class="row mb-5">
          <Row>
            <Col>
              <Image src="black-bill.jpg" className="round" thumbnail />
            </Col>
            <Col>
              <h1 id="txt" className="p-2">
                Audi's Commitment to Excellence
              </h1>
              <h4 id="mid" className="p-2">
                In the world of Audi driving is not simply a necessity.
              </h4>
              <h5 id="bot" className="p-2">
                Exhilarating performance to the lavish comfort, Audi
                effortlessly integrates style and substance, creating cars that
                not only move you physically but also stir your soul. Every
                curve, every feature, is a symphony of design and functionality,
                elevating driving to an art form. Audi isn't just a brand; it's
                a lifestyle, where every drive is a celebration of excellence
                and a testament to the passion for pushing boundaries. Whether
                navigating city streets or cruising on the open road, Audi's
                state-of-the-art features, such as intuitive infotainment
                systems and advanced driver assistance technologies.
              </h5>
            </Col>
          </Row>
        </div> */}
      </Container>
    </>
  );
}

export default Card2;
