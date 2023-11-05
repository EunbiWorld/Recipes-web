import styled from "styled-components";

const IntroPage = styled.div`
  .slide {
  }

  .slide img {
    max-width: 100%;
    height: 50%;
  }

.slick-dots {
    bottom: 2em;
}
.slick-dots li button:before {
    font-size: 20px;
    color: black;
}

.custom-dot {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  /* 원하는 스타일 및 위치 조정을 수행하세요. */
}

`;

export default IntroPage;