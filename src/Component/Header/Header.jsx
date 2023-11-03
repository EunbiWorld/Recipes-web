import React from "react";
import { Link } from "react-router-dom";
import HeadMenu from "../../styled/HeadMenu";

const Header = () => {
  return (
    <HeadMenu>
      <header>
        <div className="wrapper">
          <div className="container">
            <Link to="/" className="link-style">
              <div className="content">
                {/* <img src={logoimg} alt="레시피 웹 로고" /> */}
                <div className="logo">레시피 웹</div>
              </div>
            </Link>
          </div>
          <nav className="nav-menu">
            <li>
              <span>
                <Link to="/Introduction" className="link-style">
                  '웹 이름 들어갈 자리'소개
                </Link>
              </span>
            </li>
            <li>
              <span>
                <Link to="/Recommendation" className="link-style">
                  오늘의 추천
                </Link>
              </span>
            </li>
            <li>
              <span>
                <Link to="/RecipeList" className="link-style">
                  레시피
                </Link>
              </span>
            </li>
          </nav>
        </div>
      </header>
    </HeadMenu>
  );
};

export default Header;
