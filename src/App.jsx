import { Route, Routes } from "react-router-dom";
import AppPage from "./styled/App";
import Header from "./Component/Header/Header";
import Recommendation from "./Component/Main/Recommendation";
import Introduction from "./Component/Main/Introduction";
import RecipeList from "./Component/Main/RecipeList";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <AppPage>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Recommendation />} /> {/* 메인 페이지 */}
        <Route path="/Introduction" element={<Introduction />} />
        <Route path="/Recommendation" element={<Recommendation />} />
        <Route path="/Recipe" element={<RecipeList />} />
      </Routes>
      <Footer></Footer>
    </AppPage>
  );
}

export default App;
