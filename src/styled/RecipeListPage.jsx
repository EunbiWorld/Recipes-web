import styled from "styled-components";

const RecipeListPage = styled.header`
.grid-container{
    width: 1100px;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 6rem auto;
}
.RecipeListGrid{
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(310px, 1fr)); // 유연한 그리드 설정
    grid-gap: 64px;
    grid-column-gap: 40px;
    justify-items: center;
}
.RecipeCard{
    width: 310px;
    height: 400px;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    text-align: center;
}
.RecipeCard img {
    width: calc(100%);
    height: calc(100% - 6rem);
  }

  .RecipeCard span {
    color: #828282;
    font-size: 16px;
    margin-top: 10px; 
  }
  .RecipeCard h1{
    color: #000000;
    font-size: 24px;
  }

  .RecipeCard p {
    color: #000000;
    font-size: 16px;
    margin-top: 10px; 
  }
`;

export default RecipeListPage;