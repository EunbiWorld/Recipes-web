import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RecipeListPage from "../../styled/RecipeListPage";
import { useRecoilState } from "recoil";
import GogiImg from "../../res/img/gogi.jpg";
import recipeLoad from "../Function/RecipeLoad";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await recipeLoad();
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <RecipeListPage>
      <section className="Recipe-header">
        <h2>DELICIOUS RECIPES FOR YOU</h2>
        <span>당신을 위한 맛있는 레시피입니다</span>
      </section>
      <section className="grid-container">
        <nav className="RecipeListGrid">
          {recipes.map((recipe, index) => (
            <div key={index} className="RecipeCard">
              <Link
                to={`/RecipeList/info?id=${recipe.ID}`}
                style={{ textDecoration: "none" }}
              >
                <img src={recipe.Image} alt={recipe.Title} />
                <h1>{recipe.Title}</h1>
                <p>뭐 넣을까</p>
              </Link>
            </div>
          ))}

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
            <p>별점이나</p>
          </div>
          <div className="RecipeCard">
            <img src={GogiImg} alt="고기" />
            <span>한식</span>
            <h1>삽겹살</h1>
            <p>요리 난이도나</p>
          </div>
          <div className="RecipeCard">
            <img src={GogiImg} alt="고기" />
            <span>한식</span>
            <h1>삽겹살</h1>
            <p>요리 시간</p>
          </div>
          <div className="RecipeCard">
            <img src={GogiImg} alt="고기" />
            <span>한식</span>
            <h1>삽겹살</h1>
            <p>보여주면</p>
          </div>
          <div className="RecipeCard">
            <img src={GogiImg} alt="고기" />
            <span>한식</span>
            <h1>삽겹살</h1>
            <p>괜찮을까?</p>
          </div>
        </nav>
      </section>
    </RecipeListPage>
  );
};

export default RecipeList;
