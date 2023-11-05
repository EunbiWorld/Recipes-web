import styled from "styled-components";

const FooterMenu = styled.div`
  .container {
    border-top: 1.5px solid #414581;
    border-bottom: 1.5px solid #414581;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }

  .main {
    border-right: 1.5px solid #414581;
    text-align: center;
    grid-column: 1 / span 2;
    padding: 10px;
  }
  .main img {
    width: 100px;
  }

  .main p {
    font-family: "Cafe24SsurroundAir";
    font-size: 18px;
    color: #414581;
  }

  .menu {
    grid-column: 3;
    padding: 10px;
  }

  .Personal-page {
    grid-column: 4;
    padding: 10px;
  }

  .menu h1,
  .Personal-page h1 {
    font-family: "Cafe24Ssurround";
    font-size: 18px;
    color: #414581;
    display: flex;
    justify-content: center;
  }

  .menu ul,
  .Personal-page ul {
    padding-left: 0;
    font-family: "Cafe24SsurroundAir";
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .menu li,
  .Personal-page li {
    font-size: 15px;
    color: #000000;
    text-align: left;
    margin: 0 10px;
  }

  .icon {
    margin-right: 5px;
  }

  .link-style {
    text-decoration: none;
    color: #414581;
    transition: font-size 0.3s ease;
  }

  .link-style:hover {
    font-size: 17px;
  }

  @media screen and (min-width: 768px) {
    .container {
      padding: 20px;
    }

    .menu,
    .Personal-page {
      display: inline-block;
      margin: 0;
    }
  }
`;

export default FooterMenu;
