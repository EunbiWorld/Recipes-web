import React from "react";
import IntroPage from "../../styled/IntroPage";
import food1 from "../../res/img/food1.png";
import food2 from "../../res/img/food2.png";
import food3 from "../../res/img/food3.png";
import logo1 from "../../res/img/logo.png";
import logo2 from "../../res/img/logo_2.png";
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
          <section className="content_logo">
            <img src={logo2} alt="logo2" />
          </section>
          <section className="content_intro">
            <div>
              <img src={logo1} alt="logo1" />
              <h1>에 오신 것을 환영합니다!</h1>
            </div>
            <p>
              우리의 웹사이트는 요리를 사랑하는 모든 분들을 위한 공간입니다. <br/>
              새로운 레시피를 찾고자 하는 초보자부터, 특별한 메뉴로 손님을 <br/>
              초대하고 싶은 집밥 요리사들까지, 모두에게 즐거움을 주는 요리의 <br/>
              세계로 안내해드립니다. 우리의 레시피는 간단한 아침식사부터 정교한 <br/>
              디너메뉴까지, 다양한 범위를 커버하고 있습니다. 또한, 재료 선택부터 <br/>
              조리 방법, 그리고 요리 팁까지, 세세한 부분까지 고려하여 쉽고 <br/>
              재미있게 요리를 즐길 수 있도록 도와드립니다.
            </p>
          </section>
        </div>
      </div>
    </IntroPage>
  );
};

export default Introduction;
