import styled from "styled-components";

const FooterMenu = styled.div`
  .container {
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }

  .main {
    border-right: 1px solid gray;
    text-align: center;
    grid-column: 1 / span 2; 
    padding: 10px;
  }

  .main p {
    font-size: 18px;
    color: #333;
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
    font-size: 18px;
    color: #000000;
    display: flex;
    justify-content: center;
  }

  .menu ul,
  .Personal-page ul {
    padding-left: 0;
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

  .link-style {
    text-decoration: none;
    color: inherit;
    transition: font-size 0.3s ease;
  }

  .link-style:hover {
    color: green;
    font-size: 17px;
  }

  @media screen and (min-width: 768px) {
    .container {
      padding: 20px;
    }

    .menu,
    .Personal-page {
      display: inline-block; /* 인라인 요소로 배치 변경 */
      margin: 0; /* 여백 초기화 */
    }
  }
`;

export default FooterMenu;
