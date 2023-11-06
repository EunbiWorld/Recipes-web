import React from "react";
import { Link } from "react-router-dom";
import RecipeListPage from "../../styled/RecipeListPage";
import GogiImg from "../../res/img/gogi.jpg";

const RecipeList = () => {
  return (
    <RecipeListPage>
      <section className="grid-container">
        <nav className="RecipeListGrid">
          <div className="RecipeCard">
            <img src={GogiImg} alt="고기" />
            <span>한식</span>
            <h1>삽겹살</h1>
            <p>뭐 넣을까</p>
          </div>
          <div className="RecipeCard">
            <img src={GogiImg} alt="고기" />
            <span>한식</span>
            <h1>삽겹살</h1>
            <p>뭐 넣을까</p>
          </div>
          <div className="RecipeCard">
            <img src={GogiImg} alt="고기" />
            <span>한식</span>
            <h1>삽겹살</h1>
            <p>뭐 넣을까</p>
          </div>
          <div className="RecipeCard">
            <img src={GogiImg} alt="고기" />
            <span>한식</span>
            <h1>삽겹살</h1>
            <p>뭐 넣을까</p>
          </div>
          <div className="RecipeCard">
            <img src={GogiImg} alt="고기" />
            <span>한식</span>
            <h1>삽겹살</h1>
            <p>뭐 넣을까</p>
          </div>
          <div className="RecipeCard">
            <img src={GogiImg} alt="고기" />
            <span>한식</span>
            <h1>삽겹살</h1>
            <p>뭐 넣을까</p>
          </div>
        </nav>
      </section>
    </RecipeListPage>
  );
};

export default RecipeList;
