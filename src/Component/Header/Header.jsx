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
                <div className="logo">로고 이미지</div>
              </div>
            </Link>
          </div>
          <nav className="nav-menu">
            <li>
              <span>
                  '웹 이름 들어갈 자리'소개
                <Link to="/Introduction" className="link-style">
                </Link>
              </span>
            </li>
            <li>
              <span>
                  오늘의 추천
                <Link to="/Recommendation" className="link-style">
                </Link>
              </span>
            </li>
            <li>
              <span>
                  레시피
                <Link to="/RecipeList" className="link-style">
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
