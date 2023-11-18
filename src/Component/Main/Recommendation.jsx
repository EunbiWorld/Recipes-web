import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import recipeLoad_reco from "../Function/RecipeLoad_reco";
import RecoPage from "../../styled/RecoPage";

const Recommendation = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await recipeLoad_reco();
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <RecoPage>
      <div className="container">
        <section className="center-content">
          <h1>RECIPE FOR YOU</h1>
          <span>오늘의 추천 레시피입니다</span>
          <section className="recipe-grid">
            {recipes.map((recipe, index) => (
              <div className="grid_item" key={recipe.ID}>
                <Link to={`/Recipe/Info?id=${recipe.ID}`}>
                  <img src={recipe.Image} alt={recipe.Title} />
                  <div className={`recipe-title`}>
                    {recipe.Title}
                  </div>
                </Link>
              </div>
            ))}
          </section>
        </section>
      </div>
    </RecoPage>
  );
};

export default Recommendation;
