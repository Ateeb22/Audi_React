import Carousel from "react-bootstrap/Carousel";
import HeadNavbar from "../components/navbar";
import Cardwork from "./Card";
import Button from "react-bootstrap/Button";
import Middle from "./Middle";
import Details from "./Details";
import Card2 from "./Card2";


function Home() {
  return (
    <div>
      <HeadNavbar />
      <Carousel className="carousel-icon">
        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              src="audi.jpg"
              style={{ height: "560px", width: "100%", objectFit: "cover" }}
            />
            <div className="carousel-overlay"></div>
          </div>
          <Carousel.Caption>
            <h2>Audi A4</h2>
            <h5>Known for its elegant design and luxurious interior.</h5>
            <Button className="sliderbutton" variant="light">
              Register Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              src="audi-1.jpg"
              style={{ height: "560px", width: "100%", objectFit: "cover" }}
            />
            <div className="carousel-overlay"></div>
          </div>
          <Carousel.Caption>
            <h2>Audi E-Tron Gt</h2>
            <h5>
              Equipped with advanced infotainment and driver-assist features.
            </h5>
            <Button className="sliderbutton" variant="light">
              Register Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              src="audi-2.jpeg"
              style={{ height: "560px", width: "100%", objectFit: "cover" }}
            />
            <div className="carousel-overlay"></div>
          </div>
          <Carousel.Caption>
            <h2>Audi Q5</h2>
            <h5>Boasts a stylish exterior design with premium finishes.</h5>
            <Button className="sliderbutton" variant="light">
              Register Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img
              src="audi_3.jpeg"
              style={{ height: "560px", width: "100%", objectFit: "cover" }}
            />
            <div className="carousel-overlay"></div>
          </div>
          <Carousel.Caption>
            <h2>Audi A-Coupe</h2>
            <h5>
              Features fuel-efficient engines without compromising performance.
            </h5>
            <Button className="sliderbutton" variant="light">
              Register Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Middle/>
      <Cardwork />
      <Details />
      <Card2 />
    </div>
  );
}

export default Home;
