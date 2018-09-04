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
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 2000,
        autoplayspeed: 2000,
        cssEase: 'linear'
      };
      return (
        <div className='carousel-container'>
          <h2> Juul Pod Flavors </h2>
          <Slider {...settings}>
            <div>
              <img src={Classicmenthol} alt='classicmenthol'></img>
              <a>Classic Menthol Pods</a>
            </div>
            <div>
              <img src={Classictobacco} alt='classictobacco'></img>
              <a>Classic Tobacco Pods</a>
            </div>
            <div>
              <img src={Coolcucumber} alt='coolcucumber'></img>
              <a>Cool Cucumber Pods</a>
            </div>
            <div>
              <img src={Coolmint} alt='coolmint'></img>
              <a>Cool Mint Pods</a>
            </div>
            <div>
              <img src={Cremebrulee} alt='cremebrulee'></img>
              <a>Creme Brulee Pods</a>
            </div>
            <div>
              <img src={Fruitmedley} alt='fruitmedley'></img>
              <a>Fruit Medley Pods</a>
            </div>
            <div>
              <img src={Mango} alt='mango'></img>
              <a>Mango Pods</a>
            </div>
            <div>
              <img src={Virginiatobacco} alt='virginiatobacco'></img>
              <a>Virginia Tobacco Pods</a>
            </div>
          </Slider>
        </div>
      );
    }
  }

export default Carousel;
