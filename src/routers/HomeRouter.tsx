import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, RouteComponentProps, Switch } from "react-router-dom";
import ArticleItemView from "../pages/ArticleItemView";
import ArticlesView from "../pages/ArticlesView";
import DummyLandingPage from "../pages/DummyLandingPage";
import Merkliste from "../pages/Merkliste";
import NotFound404 from "../pages/NotFound404";
import {
  fetchAllArticlesByText,
  getSelectedArticlesIdAsync,
} from "../redux/actions/articlesActions";
import { RootState } from "../redux/store/store";
import { ArticleInitialState } from "../types/reducers.interface";

const HomeRouter: React.FC<{ routing: RouteComponentProps }> = (props) => {
  const dbDispatchLocalStorage = useDispatch();
  const articlesState: ArticleInitialState = useSelector(
    (state: RootState) => state.articles
  );
  const { articles } = articlesState;
  useEffect(() => {
    dbDispatchLocalStorage(fetchAllArticlesByText("nintendo"));
    dbDispatchLocalStorage(getSelectedArticlesIdAsync());
  }, [dbDispatchLocalStorage]);
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home-exercise" />
        </Route>
        <Route path="/home-exercise/merkliste">
          <Merkliste />
        </Route>
        <Route exact path="/home-exercise">
          <DummyLandingPage dummyItems={articles} />
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
