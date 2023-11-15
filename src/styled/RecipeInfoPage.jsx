import styled from "styled-components";

const RecipeInfoPage = styled.header`
  .info-container {
    width: 1100px;
    height: auto;
    flex-direction: column;
    margin: 3rem auto;
    border-color: red;  //컨테이너 사이즈 가늠하기 위해서 임시로 해놈
    border-style: solid;  //컨테이너 사이즈 가늠하기 위해서 임시로 해놈
  }
  .title-section{
    width: 100%;
    height: fit-content;
  }
  .info-section{
    width: 100%;
    height: auto;
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    gap: 20px;
  }
  .title-section{
    width: 100%;
    height: fit-content;
  }
  .title-section h1{
    width: 100%;
    text-align: center;
    font-size: 40px;
  }
  .img-section{
    display: flex;
    margin: 10px;
  }
  .img-section img{
    width: 540px;
    height: 540px;
  }
  .text-section{
    display: flex;
    flex-direction: column;
    margin: 20px;
  }
  h2{
    text-align: center;
    font-size: 30px;
    text-align: center;
  }
  p{
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export default RecipeInfoPage;
