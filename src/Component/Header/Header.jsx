import React from "react";
import { Link } from "react-router-dom";
import HeadMenu from "../../styled/HeadMenu";

const Header = () => {
  return (
    <HeadMenu>
        <div className="container">
          <Link to="/" className="link-style">
            <div className="content">
              {/* <img src={logoimg} alt="레시피 웹 로고" /> */}
              <div className="logo">레시피 웹</div>
            </div>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/Introduction" className="link-style">
                '웹 이름 들어갈 자리'소개
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
          </ul>
        </nav>
    </HeadMenu>
  );
};

export default Header;
