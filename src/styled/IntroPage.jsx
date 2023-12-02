import styled from "styled-components";

const IntroPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .slide {
    width: 85em;
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

  .content {
    width: 85em;
    margin-top: 5rem;
    margin-bottom: 5rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }

  .content_logo {
    grid-column: 1;
  }

  .content_logo img {
    margin: 5rem 5rem;
    width: 80%;
  }

  .content_intro {
    grid-column: 2;
  }
  .content_intro div {
    display: flex;
    align-items: center;
  }
  .content_intro img {
    width: 20%;
    height: auto;
    margin-right: 10px;
  }
  .content_intro h1 {
    font-family: "Cafe24Ssurround";
    color: #414581;
    margin-top: 4rem;
  }
  .content_intro p {
    line-height: 1.6;
    margin: 1rem 0;
    text-align: justify;
    text-indent: 1em;
    font-family: "Cafe24Ssurroundair";
    font-size: 1.3rem;
    color: #414581;
  }

  @media (max-width: 1300px) {
    .content {
      grid-template-columns: 1fr;
      margin-top: 0px;
    }

    .content_logo,
    .content_intro {
      grid-column: 1;
      display: grid;
      justify-content: center;
      text-align: center; // 내용을 가운데 정렬하는 부분입니다
    }

    .content_logo img {
      margin: 5rem auto; // 이미지를 수직으로 가운데 정렬하기 위해 변경
      width: 50%;
    }
  }
`;

export default IntroPage;
