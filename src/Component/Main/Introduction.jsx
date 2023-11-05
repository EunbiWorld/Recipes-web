import React from "react";
import IntroPage from "../../styled/IntroPage";
import food1 from "../../res/img/food.jpeg";
import food2 from "../../res/img/food.jpeg";
import food3 from "../../res/img/food.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Introduction = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <IntroPage>
      <div className="slide">
        <Slider {...settings}>
          <div className="slide-item">
            <img src={food1} alt="Food 1" />
            <div className="custom-dot" />
          </div>
          <div className="slide-item">
            <img src={food2} alt="Food 2" />
            <div className="custom-dot" />
          </div>
          <div className="slide-item">
            <img src={food3} alt="Food 3" />
            <div className="custom-dot" />
          </div>
        </Slider>
      </div>
      <div className="content"></div>
    </IntroPage>
  );
};

export default Introduction;
