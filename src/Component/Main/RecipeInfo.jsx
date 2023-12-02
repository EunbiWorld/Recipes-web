import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeInfoPage from "../../styled/RecipeInfoPage";
import GogiImg from "../../res/img/gogi.jpg";
import recipeLoad from "../Function/RecipeLoad";

const RecipeInfo = () => {
  const { index } = useParams();
  const [recipe, setRecipe] = useState(null);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await recipeLoad();
        const selectedRecipe = data[index];
        setRecipe(selectedRecipe);
      } catch (error) {
        console.error("데이터를 불러오는 중 오류 발생:", error);
      }
    };

    fetchData();
  }, [index]);

  if (!recipe) {
    return <div>로딩 중...</div>;
  }

  return (
    <RecipeInfoPage>
      <section className="info-container">
        <div className="title-section">
          <h1>{recipe.Title}</h1>
        </div>
        <nav className="info-section">
          <div className="img-section">
            <img src={recipe.Image} alt="음식 이미지" />
          </div>
          <div className="text-section">
            <h2>재료</h2>
            <p1>{recipe.Source.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    <div>{line}</div>
                  </React.Fragment>
                ))}</p1>
            <h2>조리순서</h2>
            <p2>{recipe.Recipe.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    <div>{line}</div>
                    <br/>
                  </React.Fragment>
                ))}</p2>
          </div>
        </nav>
      </section>
    </RecipeInfoPage>
  );
};

export default RecipeInfo;
