import React from "react";
// import { useState, useEffect } from "react";
import RecoPage from "../../styled/RecoPage";

// const [recipes, setRecipes] = useState([]);

// useEffect(() => {
//   fetch("파일 경로")
//     .then((response) => response.json())
//     .then((data) => setRecipes(data))
//     .catch((error) => console.error("Error fetching data:", error));
// }, []);

const Recommendation = () => {
  return (
    <RecoPage>
      <div className="container">
        <h1>RECIPE FOR YOU</h1>
        <span>오늘의 추천 레시피입니다</span>
        <section className="grid_recipe">
          {/* {recipes.map((recipe, index) => (
            <div key={index} className="grid_item">
              <img src={recipe.image} alt={recipe.title} />
              <h2>{recipe.title}</h2>
              <p>{recipe.description}</p>
            </div>
          ))} */}
        </section>
      </div>
    </RecoPage>
  );
};

export default Recommendation;
