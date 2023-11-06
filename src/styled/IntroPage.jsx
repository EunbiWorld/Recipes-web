import styled from "styled-components";

const IntroPage = styled.div`
  .slide {
    overflow-x: hidden;
  }

  .slide img {
    max-width: 100%;
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
  }
`;

export default IntroPage;
