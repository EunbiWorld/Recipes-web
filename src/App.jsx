import { Route, Routes } from "react-router-dom";
import AppPage from "./styled/App";
import Header from "./Component/Header/Header";
import Recommendation from "./Component/Main/Recommendation";
import Introduction from "./Component/Main/Introduction";
import RecipeList from "./Component/Main/RecipeList";
import Footer from "./Component/Footer/Footer";
import RecipeInfo from "./Component/Main/RecipeInfo";

function App() {
  return (
    <AppPage>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Recommendation />} />
        <Route path="/Introduction" element={<Introduction />} />
        <Route path="/Recommendation" element={<Recommendation />} />
        <Route path="/RecipeList" element={<RecipeList />} />
        <Route path="/RecipeList/Info" element={<RecipeInfo/>}/>
      </Routes>
      <Footer></Footer>
    </AppPage>
  );
}

export default App;
