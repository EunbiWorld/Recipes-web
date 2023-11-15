import React from "react";
import { Link } from "react-router-dom";
import RecipeInfoPage from "../../styled/RecipeInfoPage";
import GogiImg from "../../res/img/gogi.jpg";

const RecipeInfo = () => {
  return (
    <RecipeInfoPage>
      <section className="info-container">
        <div className="title-section">
          <h1>타이틀 텍스트가 들어갈 곳</h1>
        </div>
        <nav className="info-section">
          <div className="img-section">
            {/* 이미지 섹션입니다 */}
            <img src={GogiImg} alt="고기" />
          </div>
          <div className="text-section">
            {/* 텍스트 섹션입니다 */}
            <h2>재료</h2>
            <p>재료에 대한 설명이 들어갈 곳</p>
            <h2>조리순서</h2>
            <p>조리순서에 대한 설명이 들어갈 곳</p>
          </div>
        </nav>
      </section>
    </RecipeInfoPage>
  );
};

export default RecipeInfo;
