import styled from "styled-components";

const RecoPage = styled.div`
  .center-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: 2em 1em;
  }

  h1 {
    font-size: 1.5em;
    font-family: "Cafe24Ssurround";
    color: #414581;
  }

  span {
    font-size: 1em;
    font-family: "Cafe24Ssurroundair";
    color: #414581;
  }

  .recipe-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 1em;
    height: auto;
    padding: 3em 15em;
  }

  .grid_item {
    position: relative;
  }

  .grid_item .recipe-title {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    opacity: 0;
  }

  .grid_item:hover .recipe-title {
    opacity: 1;
  }
  .grid_item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .grid_item:first-child {
    grid-column: span 2;
    grid-row: 1 / 3;
  }

  .grid_item:nth-child(2) {
    grid-column: 3;
    grid-row: 1;
  }

  .grid_item:nth-child(3) {
    grid-column: 4;
    grid-row: 1;
  }

  .grid_item:nth-child(4) {
    grid-column: 3 / 5;
    grid-row: 2;
  }

  @media screen and (max-width: 1600px) {
    .recipe-grid{
      padding: 3em 7em;
    }
  }
  @media screen and (max-width: 1200px) {
    .recipe-grid{
      padding: 3em;
    }
  }
`;

export default RecoPage;
