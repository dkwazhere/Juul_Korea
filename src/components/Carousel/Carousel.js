import React from "react";
import Slider from "react-slick";
import './Carousel';

class Carousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <img src='https://avatars0.githubusercontent.com/u/29829664?s=460&v=4'></img>
        </div>
        <div>
          <img src='https://avatars0.githubusercontent.com/u/29829664?s=460&v=4'></img>
        </div>
        <div>
          <img src='https://avatars0.githubusercontent.com/u/29829664?s=460&v=4'></img>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    );
  }
}

export default Carousel;
