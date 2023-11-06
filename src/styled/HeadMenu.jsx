import styled from "styled-components";

const HeadMenu = styled.header`
  border-bottom: 0.05em solid #414581;

  .explanation {
    background-color: #fec198;
    padding: 0.8em;
    text-align: center;
    font-family: "Cafe24SsurroundAir";
    color: #414581;
  }
  .wrapper {
    max-width: 68em;
    height: 8.67em;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .wrapper img {
    width: 16.3636em;
    align-items: center;
  }
  .nav-menu {
    float: right;
    font-family: "Cafe24Ssurround";
    font-size: 1.25em;
  }
  .nav-menu a {
    color: #414581;
    text-decoration: none;

  }
  .nav-menu li {
    display: block;
    float: left;
    padding: 0 1.875em;
    list-style: none;
    transition: font-size 0.3s ease;
  }
  .nav-menu li:hover {
    font-size: 1.255em;
  }
  @media screen and (max-width: 48em) {
    .container {
      display: flex;
      flex-direction: column;
    }
    .wrapper {
      flex-direction: column;
      height: auto; /* 높이를 자동으로 조정 */
    }
    .wrapper img {
      margin-top: 1em;
    }
    .nav-menu {
      margin-top: 1em;
      margin-bottom: 0.5em;
    }

  }
`;

export default HeadMenu;
