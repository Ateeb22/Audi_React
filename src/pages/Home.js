import Carousel from "react-bootstrap/Carousel";
import HeadNavbar from "../components/navbar";
import Cardwork from "./Card";
import Button from "react-bootstrap/Button";
import Middle from "./Middle";
import Details from "./Details";
import Card2 from "./Card2";
import { Element } from "react-scroll";
import Video from "./Video";
import Footer from "../components/footer";
import Bottom from "./Bottom";

function Home() {
  return (
    
    <div>
      <Element name="home" id="home">
        <HeadNavbar />
     
        <Carousel className="carousel-icon">
          <Carousel.Item>
            <div className="carousel-image-container">
              <img
                src="audi-1.jpg "
                style={{ height: "635px", width: "100%", objectFit: "cover" }}
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
                src="road-audi.jpg"
                style={{ height: "635px", width: "100%", objectFit: "cover" }}
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
                src="char.jpg"
                style={{ height: "635px", width: "100%", objectFit: "cover" }}
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
                src="white-audi.jpg"
                style={{ height: "635px", width: "100%", objectFit: "cover" }}
              />
              <div className="carousel-overlay"></div>
            </div>
            <Carousel.Caption>
              <h2>Audi A-Coupe</h2>
              <h5>
                Features fuel-efficient engines without compromising
                performance.
              </h5>
              <Button className="sliderbutton" variant="light">
                Register Now
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Element>

      <Element  id="service">
        <Middle />
      </Element>

      <Element  id="pricing">
      <Cardwork />
      </Element>

      <Element  id="contact" >
      <Details />
      </Element>


     
      <Card2
        imgg="blacky-bill.jpg"
        mantxt="Pioneering design icon"
        midtxt="Audi epitomizes automotive elegance, blending sleek design with
             timeless sophistication."
        bottxt="Each Audi model is a masterpiece of engineering attention
             Details. Behind the wheel of an Audi, every journey becomes an
             experience of luxury and refinement. Audi's commitment to
             innovation ensures that each vehicle is equipped with
             cutting-edge technology for a seamless driving experience. From
             powerful performance to luxurious comfort, Audi seamlessly
             integrates style and substance in every car they produce and advanced driver assistance technologies."
        isLeft={true}
      />

     <Element id="about" >
      <Card2
        imgg="light-bill.jpg"
        mantxt="The Art Technology"
        midtxt="Audi's legacy is not just in their vehicles, but in the memories
             created behind the wheel."
        bottxt=" Audi's legacy is one of unparalleled engineering prowess, where
             every model stands as a testament to meticulous attention to
             detail and uncompromising craftsmanship. Behind the wheel of an
             Audi, each journey is transformed into an extraordinary
             experience where luxury and refinement converge seamlessly.
             Rooted in a relentless pursuit of innovation, Audi ensures that
             each vehicle is equipped with cutting-edge technology setting
             new standards for the modern driving experience."
        isLeft={false}
      />

      <Card2
        imgg="black-bill.jpg"
        mantxt="Audi's Commitment to Excellence"
        midtxt="In the world of Audi driving is not simply a necessity."
        bottxt="Exhilarating performance to the lavish comfort, Audi
             effortlessly integrates style and substance, creating cars that
             not only move you physically but also stir your soul. Every
             curve, every feature, is a symphony of design and functionality,
             elevating driving to an art form. Audi isn't just a brand it's
             a lifestyle where every drive is a celebration of excellence
             and a testament to the passion for pushing boundaries. Whether
             navigating city streets or cruising on the open road such as intuitive infotainment
             systems."
        isLeft={true}
      />
      </Element>
      {/* <Details/> */}

      <Video     
        tx="Audi's Excellence and Innovative Design."
        md="Every
        curve, every feature, is a symphony of design and functionality,
        elevating driving to an art form. Audi isn't just a brand where every drive is a celebration of excellence
        and a testament to the passion for pushing boundaries."
        ur="audi-e-tron-gt-aero.mp4"
        wd="100%"
        he="100%"
        lp="true"
        // con="false"
        pl="true"
        mu="muted"       
      />
      
      <Bottom/>



         <Footer />
    </div>
       
  );
}

export default Home;
