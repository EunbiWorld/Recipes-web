import React, { useState, useEffect } from "react";
import RecoPage from "../../styled/RecoPage";

const Recommendation = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("파일 경로 작성")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <RecoPage>
      <div className="container">
        <section className="center-content">
          <h1>RECIPE FOR YOU</h1>
          <span>오늘의 추천 레시피입니다</span>
          <section className="recipe-card">
            {recipes.map((recipe, index) => (
              <div key={index} className="grid_item">
                <img src={recipe.image} alt={recipe.name} />
                <h2>{recipe.name}</h2>
                <p>{recipe.description}</p>
              </div>
            ))}
          </section>
        </section>
      </div>
    </RecoPage>
  );
};

export default Recommendation;
