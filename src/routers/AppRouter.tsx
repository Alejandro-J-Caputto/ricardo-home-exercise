
import { Route, Switch, Redirect } from "react-router-dom";
import SearchBar from "../components/search/SearchBar";
import ArticleItemView from "../pages/ArticleItemView";
import ArticlesView from "../pages/ArticlesView";
import NotFound404 from "../pages/NotFound404";

const AppRouter: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home-exercise" />
      </Route>
      <Route path="/home-exercise" exact>
        <SearchBar />
      </Route>
      <Route path="/home-exercise/search/:searchText" exact>
        <ArticlesView />
      </Route>
      <Route path="/home-exercise/article/:articleId">
        <ArticleItemView />
      </Route>
      <Route path='*'>
        <NotFound404/>
      </Route>
    </Switch>
  );
};

export default AppRouter;
