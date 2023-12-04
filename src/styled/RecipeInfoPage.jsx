import styled from "styled-components";

const RecipeInfoPage = styled.header`
  .info-container {
    width: 1100px;
    height: auto;
    flex-direction: column;
    margin: 3rem auto;
    border-color: none; //컨테이너 사이즈 가늠하기 위해서 임시로 해놈
    border-style: none; //컨테이너 사이즈 가늠하기 위해서 임시로 해놈
  }
  .title-section {
    width: 100%;
    height: fit-content;
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
  .info-section {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .title-section {
    width: 100%;
    height: fit-content;
  }
  .title-section h1 {
    text-align: center;
    font-size: 40px;
    white-space: normal;
    font-family: "Cafe24Ssurround";
  }
  .img-section {
    display: flex;
    margin: 10px;
  }
  .img-section img {
    width: 540px;
    height: 540px;
    object-fit: cover;

  }
  .text-section {
    display: flex;
    flex-direction: column;
    margin: 20px;
    margin-top: 5px;
  }
  h1 {
    font-family: "Cafe24Ssurround";
  }
  h2 {
    text-align: center;
    font-size: 30px;
    text-align: center;
    font-family: "Cafe24Ssurroundair";
  }
  p1{
    padding-left: 20px;
    padding-right: 20px;
    line-height: 25px;
    text-align: center;
    font-family: "Cafe24Ssurroundair";
  }
  p2{
    padding-left: 20px;
    padding-right: 20px;
    line-height: 25px;
    font-family: "Cafe24Ssurroundair";
  }

  @media screen and (max-width: 1100px) {
    .info-container {
      width: auto;
      height: auto;
      flex-direction: column;
    }
    .img-section img {
      width: 450px;
      height: 450px;
    }
  }
  @media screen and (max-width: 910px) {
    .title-section {
      width: 100%;
      margin-top: 15px;
    }
    .img-section img {
      width: 400px;
      height: 400px;
    }
  }
  @media screen and (max-width: 768px) {
    .info-container {
      width: auto;
      height: auto;
      display: flex;
      flex-direction: column;
      margin: 0px;
    }
    .info-section {
      grid-template-columns: 1fr;
    }
    .title-section {
      width: 100%;
      margin: 15px;
    }
    .img-section {
      display: flex;
      margin: 10px;
      justify-content:center;
    }
    .img-section img {
      width: 80%;
      height: 300px;
      object-fit: cover;
    }
  }
`;

export default RecipeInfoPage;
