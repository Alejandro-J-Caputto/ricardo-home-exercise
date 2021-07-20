import {
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
} from "react-router-dom";
import SearchBar from "../components/search/SearchBar";
import ArticleItemView from "../pages/ArticleItemView";
import ArticlesView from "../pages/ArticlesView";
import Merkliste from "../pages/Merkliste";
import NotFound404 from "../pages/NotFound404";

const HomeRouter: React.FC<{ routing: RouteComponentProps }> = (props) => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home-exercise"/>
        </Route>
        <Route path="/home-exercise/merkliste">
          <Merkliste />
        </Route>
        <Route exact path="/home-exercise">
          <SearchBar />
        </Route>
        <Route path="/home-exercise/search/:searchText">
          <ArticlesView />
        </Route>
        <Route path="/home-exercise/article/:articleId">
          <ArticleItemView />
        </Route>
        <Route path="*">
          <NotFound404 />
        </Route>
      </Switch>
    </>
  );
};

export default HomeRouter;
