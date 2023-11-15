import getData from "./GetData";

const recipeLoad = async () => {
    let result = [];
    const base_data = await getData(
        'EunbiWorld',
        'Recipe_web_API',
        'recipe_API_JSON.json');

    if(base_data != null){
        result = base_data['Food']['Food recipe'];
    }

    return result;
};

export default recipeLoad;