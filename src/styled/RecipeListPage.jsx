import styled from "styled-components";

const RecipeListPage = styled.header`
  .Recipe-header {
    text-align: center;
    padding: 2em 1em;
  }
  .Recipe-header h2 {
    font-size: 1.5em;
    font-family: "Cafe24Ssurround";
    color: #414581;
  }
  .Recipe-header span {
    font-size: 1em;
    font-family: "Cafe24Ssurroundair";
    color: #414581;
  }
  .grid-container {
    width: 1100px;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 6rem auto;
    margin-top: 0;
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
    display: flex;
    flex-direction: column;
    text-decoration: none;
    text-align: center;
    font-family: "Cafe24Ssurroundair";
  }
  .RecipeCard img {
    width: 100%;
    height: 250px;
    border-radius: 10px;
    margin-bottom: 10px;
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
    .grid-container {
      width: auto;
      margin-left: 50px;
      margin-right: 50px;
    }
    .RecipeListGrid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (max-width: 768px) {
    .grid-container {
      width: auto;
      margin-left: 50px;
      margin-right: 50px;
    }
    .RecipeListGrid {
      grid-template-columns: repeat(2, 1fr);
    }
    .RecipeCard {
      height: 335px;
    }
  }
`;

export default RecipeListPage;
