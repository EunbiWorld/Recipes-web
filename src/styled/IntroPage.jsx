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

  .content {
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
`;

export default IntroPage;
