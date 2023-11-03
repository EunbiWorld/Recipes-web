import styled from "styled-components";

const HeadMenu = styled.header`
  header{
    height: 6rem;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    border-bottom: 1px solid gray;
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
    cursor: pointer;
    transition: background-color 0.3s;
    text-decoration: none;
  }
  .nav-menu span{
    line-height: 6rem;
    text-decoration: none;
    padding: 0 30px;
    display: block;
  }
  .nav-menu li:hover{
    background-color: lightgreen;
  }
  .content{
    padding: 0 20px;
    cursor: pointer;
    transition: background-color 0.3s;
    text-decoration: none;
    font-size: 20px;
  }
  .content:hover{
    background-color: lightgreen;
  }
`;

export default HeadMenu;
