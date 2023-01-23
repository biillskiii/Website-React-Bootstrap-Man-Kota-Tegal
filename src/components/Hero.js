import { Carousel } from "react-bootstrap";
import hero1 from "./../Assets/1.png";
import hero3 from "./../Assets/2.png";
import hero2 from "./../Assets/3.png";


const Hero = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={hero1} alt="First slide" />
        <Carousel.Caption>
          <h3>Boarding School</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={hero2} alt="Second slide" />

        <Carousel.Caption>
          <h3>MAN KOTA TEGAL</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={hero3} alt="Third slide" />

        <Carousel.Caption>
          <h3>PPDB MAN KOTA TEGAL 2023</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Hero;
