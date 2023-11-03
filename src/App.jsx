import { Route, Routes } from 'react-router-dom';
import AppPage from './styled/App'
import Header from './Component/Header/Header';
import Recommendation from './Component/Main/Recommendation';
import Introduction from './Component/Main/Introduction';
import RecipeList from './Component/Main/RecipeList';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <AppPage>
      <Header></Header>
        <Routes>
          <Route path="/Recommendation" element={
            <Recommendation></Recommendation>}>
          </Route>
          <Route path="/Introduction" element={
            <Introduction></Introduction>}>
          </Route>
          <Route path="/Recipe" element={
            <RecipeList></RecipeList>}>
          </Route>
        </Routes>
        <Footer></Footer>
    </AppPage>
  );
}

export default App;
