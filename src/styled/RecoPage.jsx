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

  .recipe-card {
    border: 2px solid black;
    margin-top: 2em;
    display: grid;
    width: 100%;
    max-width: 1024px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 20px;
    padding-top: 2em;
  }

  .recipe-card img {
    max-width: 100%;
    height: auto;
  }

  .recipe-card h2 {
    font-size: 1.25em;
    margin: 0.625em 0;
  }

  .recipe-card p {
    font-size: 1em;
  }
`;

export default RecoPage;
