import getData from "./GetData";

const recipeLoad_reco = async () => {
  let result = [];
  const base_data = await getData("localhost", "3000", "api/recommendation", true); // '/api/recommendation' API를 호출

  if (base_data != null) {
    result = base_data;
  }

  return result;
};

export default recipeLoad_reco;
