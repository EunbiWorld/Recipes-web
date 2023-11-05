import styled from "styled-components";
import Cafe24Ssurround from "../res/font/Cafe24Ssurround.woff";
import Cafe24SsurroundAir from "../res/font/Cafe24SsurroundAir.woff";

const AppPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 최소 높이를 화면 높이와 같게 설정 */
  background-color: #fff9f4;
  background: linear-gradient(to bottom, #fff9f4, #fec198);
  background: linear-gradient(to bottom, #fff9f4, #fec198) fixed; /* 배경 이미지를 고정 배경으로 설정 */



  @font-face {
    font-family: "Cafe24Ssurround";
    src: url(${Cafe24Ssurround}) format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Cafe24SsurroundAir';
    src: url(${Cafe24SsurroundAir}) format("woff");
    font-weight: normal;
    font-style: normal;
}
`;

export default AppPage;
