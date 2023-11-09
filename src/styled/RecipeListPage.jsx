import styled from "styled-components";

const RecipeListPage = styled.header`
  .grid-container {
    width: 1100px;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 6rem auto;
  }
  .RecipeListGrid {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 25px;
    grid-column-gap: 30px;
    justify-items: center;
  }
  .RecipeCard {
    width: auto;
    height: 380px;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    text-align: center;
    font-family: "Cafe24Ssurroundair";
  }
  .RecipeCard img {
    width: calc(100%);
    height: calc(100% - 6rem);
    border: 1px #414581;
    border-style: solid;
  }

  .RecipeCard span {
    color: #828282;
    font-size: 16px;
    margin-top: 10px;
    font-family: "Cafe24Ssurroundair";
  }
  .RecipeCard h1 {
    color: #000000;
    font-size: 24px;
    margin: 10px;
  }

  .RecipeCard p {
    color: #000000;
    font-size: 16px;
    margin-top: 10px;
    font-family: "Cafe24Ssurroundair";
  }
  @media screen and (max-width: 1200px) {
    .grid-container{
      width: auto;
      margin-left: 50px;
      margin-right: 50px;
    }
    .RecipeListGrid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (max-width: 768px) {
    .grid-container{
      width: auto;
      margin-left: 50px;
      margin-right: 50px;
    }
    .RecipeListGrid {
      grid-template-columns: repeat(2, 1fr);
    }
    .RecipeCard{
      height: 335px;
    }
  }
`;

export default RecipeListPage;
