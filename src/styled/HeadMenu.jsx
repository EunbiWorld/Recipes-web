import styled from "styled-components";

const HeadMenu = styled.header`
  header{
    height: 6rem;
    background-color: lightgray;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
  }
  .wrapper{
    width: 1100px;
    margin: 0 auto;
  }
  .container{
    line-height: 6rem;
    float: left;
  }
  .nav-menu{
    float: right;
    font-size: 20px;
  }
  .nav-menu li{
    float: left;
    list-style: none;
  }
  .nav-menu a{
    line-height: 6rem;
    text-decoration: none;
    padding: 0 20px;
    display: block;
  }
  .nav-menu li{
    cursor: pointer;
    transition: background-color 0.3s;
    text-decoration: none;
  }
  .nav-menu li:hover{
    background-color: yellow;
  }
  .content{
    cursor: pointer;
    transition: background-color 0.3s;
    text-decoration: none;
  }
  .content:hover{
    background-color: yellow;
  }
`;

export default HeadMenu;
