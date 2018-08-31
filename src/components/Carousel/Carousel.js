import React from "react";
import Slider from "react-slick";
import './Carousel.css';
import Classicmenthol from '../../assets/images/flavors/classicmenthol.jpg';
import Classictobacco from '../../assets/images/flavors/classictobacco.jpg';
import Coolcucumber from '../../assets/images/flavors/coolcucumber.jpg';
import Coolmint from '../../assets/images/flavors/coolmint.jpg';
import Cremebrulee from '../../assets/images/flavors/cremebrulee.jpg';
import Fruitmedley from '../../assets/images/flavors/fruitmedley.jpg';
import Mango from '../../assets/images/flavors/mango.jpg';
import Virginiatobacco from '../../assets/images/flavors/virginiatobacco.jpg';

class Carousel extends React.Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
      return (
        <div>
          <h2> Multiple items </h2>
          <Slider {...settings}>
            <div>
              <img src={Classicmenthol}></img>
            </div>
            <div>
              <img src={Classictobacco}></img>
            </div>
            <div>
              <img src={Coolcucumber}></img>
            </div>
            <div>
              <img src={Coolmint}></img>
            </div>
            <div>
              <img src={Cremebrulee}></img>
            </div>
            <div>
              <img src={Fruitmedley}></img>
            </div>
            <div>
              <img src={Mango}></img>
            </div>
            <div>
              <img src={Virginiatobacco}></img>
            </div>
          </Slider>
        </div>
      );
    }
  }

export default Carousel;
