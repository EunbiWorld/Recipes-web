import styled from "styled-components";

const FooterMenu = styled.div`
  .container {
    border-top: 0.05em solid #414581;
    border-bottom: 0.05em solid #414581;
    height: 10em;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.2778em;
    align-items: center;
  }

  .main {
    border-right: 0.05em solid #414581;
    text-align: center;
    grid-column: 1 / span 2;
  }
  .main img {
    width: 6.9444em;
  }

  .main p {
    font-family: "Cafe24SsurroundAir";
    font-size: 1.125em;
    color: #414581;
  }

  .menu {
    grid-column: 3;
  }

  .Personal-page {
    grid-column: 4;
  }

  .menu h1,
  .Personal-page h1 {
    font-family: "Cafe24Ssurround";
    font-size: 1.125em;
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
    font-size: 0.9375em;
    color: #000000;
    text-align: left;
    margin: 0 0.2778em;
  }

  .icon {
    margin-right: 0.1389em;
  }

  .link-style {
    text-decoration: none;
    color: #414581;
    transition: font-size 0.3s ease;
  }

  .link-style:hover {
    font-size: 1.2em;
  }
  @media screen and (max-width: 48em) {
    .container {
      display: flex;
      flex-direction: column;
      height: 20em;
    }

    .main,
    .menu,
    .Personal-page {
      flex: 1;
    }

    .main {
      border-right: none;
      margin-top: 1em;
    }
  }
`;

export default FooterMenu;
