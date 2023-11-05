import React from "react";
import { Link } from "react-router-dom";
import HeadMenu from "../../styled/HeadMenu";
import logo from "../../res/img/logo_2.png";

const Header = () => {
  return (
    <HeadMenu>
      <div className="container">
        <section className="explanation">
          <span>누구나 집에서 만들 수 있는 레시피</span>
        </section>

        <section className="wrapper">
          <div className="Logo">
            <Link to="/Recommendation" className="link-style">
              <img src={logo} alt="레시피 웹 로고" className="logo" />
            </Link>
          </div>

          <nav className="nav-menu">
            <li>
              <Link to="/Introduction" className="link-style">
                소개
              </Link>
            </li>
            <li>
              <Link to="/Recommendation" className="link-style">
                오늘의 추천
              </Link>
            </li>
            <li>
              <Link to="/RecipeList" className="link-style">
                레시피
              </Link>
            </li>
          </nav>
        </section>
      </div>
    </HeadMenu>
  );
};

export default Header;
