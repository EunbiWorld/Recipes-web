import React from "react";
import IntroPage from "../../styled/IntroPage";
import food1 from "../../res/img/food1.png";
import food2 from "../../res/img/food2.png";
import food3 from "../../res/img/food3.png";
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
      <div className="container">
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
        <div className="content">
          <h1>웹 페이지 소개</h1>
          <p>내용 넣기</p>
        </div>
      </div>
    </IntroPage>
  );
};

export default Introduction;
