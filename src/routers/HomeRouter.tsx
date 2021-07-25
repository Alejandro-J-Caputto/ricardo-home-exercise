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
  const UI = useSelector((state: RootState) => state.uiLoading);

  const { uiTheme } = UI;
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
          <Merkliste theme={uiTheme} />
        </Route>
        <Route exact path="/home-exercise">
          <DummyLandingPage theme={uiTheme} dummyItems={articles} />
        </Route>
        <Route path="/home-exercise/search/:searchText">
          <ArticlesView theme={uiTheme} />
        </Route>
        <Route path="/home-exercise/article/:articleId">
          <ArticleItemView theme={uiTheme} />
        </Route>
        <Route path="*">
          <NotFound404 theme={uiTheme} />
        </Route>
      </Switch>
    </>
  );
};

export default HomeRouter;
