import React from "react";
import { Link } from "react-router-dom";
import FooterMenu from "../../styled/FooterMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import logo from "../../res/img/logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <FooterMenu>
      <div className="container">
        <div className="main">
          <img src={logo} alt="레시피 웹 로고" />
          <p>쿠킹 스튜디오는 맛있는 요리 레시피를 공유하는 곳입니다.</p>
        </div>

        <section className="menu">
          <h1>바로가기</h1>
          <ul>
            <li>
              <Link
                to="/Introduction"
                className="link-style"
                onClick={scrollToTop}
              >
                '웹 이름'소개
              </Link>
            </li>
            <ul>
              <li>
                <Link
                  to="/Recommendation"
                  className="link-style"
                  onClick={scrollToTop}
                >
                  오늘의 추천
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link
                  to="/RecipeList"
                  className="link-style"
                  onClick={scrollToTop}
                >
                  레시피
                </Link>
              </li>
            </ul>
          </ul>
        </section>

        <section className="Personal-page">
          <nav>
            <h1>팀원 개인 페이지</h1>
            <ul>
              <li>
                <a
                  href="/"
                  className="link-style"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} className="icon" />
                  김준
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="link-style"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} className="icon" />
                  정승윤
                </a>
              </li>
              <li>
                <a
                  href="https://www.notion.so/HelloWorld_EunbiWorld-ac4f8cd123044875aba58469900ec7c3?pvs=4"
                  className="link-style"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} className="icon" />
                  이은비
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/sehoon0302"
                  className="link-style"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} className="icon" />
                  유세훈
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </FooterMenu>
  );
};

export default Footer;
