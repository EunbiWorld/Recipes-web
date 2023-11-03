import styled from "styled-components";

const HeadMenu = styled.header`
  background-color: lightgray;
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  padding: 0 20px;
  height: 6rem;
  width: 100%;
  position: sticky;

  .container {
    display: flex;
    justify-content: space-between;
  }
  .content {
    display: flex;
    align-items: center;
    font-size: 24px;
    margin-left: 150px;
  }
  .link-style {
    text-decoration: none;
    color: inherit;
    transition: font-size 0.3s ease;
  }
  .link-style:hover {
    font-size: 20px;
  }
  nav {
    font-size: 18px;
    display: flex;
    align-items: center;
  }
  nav ul {
    list-style: none;
    display: flex;
    padding: 0;
  }
  nav li {
    margin-right: 34.31px;
  }
`;

export default HeadMenu;
