import styled from "styled-components";

const HeadMenu = styled.header`
  border-bottom: 1.5px solid #414581;

  .explanation {
    background-color: #fec198;
    padding: 10px;
    text-align: center;
    font-family: "Cafe24SsurroundAir";
    color: #414581;
  }
  .wrapper {
    width: 1100px;
    height: 130px; /* 원하는 높이 값 설정 */
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .wrapper img {
    width: 270px;
    align-items: center;
  }
  .nav-menu {
    float: right;
    font-family: "Cafe24Ssurround";
    font-size: 20px;
  }
  .nav-menu a {
    color: #414581;
    text-decoration: none;

  }
  .nav-menu li {
    display: block;
    float: left;
    padding: 0 30px;
    list-style: none;
    transition: font-size 0.3s ease;
  }
  .nav-menu li:hover {
    font-size: 23px;
  }

`;

export default HeadMenu;
