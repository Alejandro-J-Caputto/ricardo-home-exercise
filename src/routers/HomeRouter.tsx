import { useState } from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Route, RouteComponentProps, Switch } from "react-router-dom";
import useDummyDbStorage from "../hooks/useDummyDbStorage";
import useFetch from "../hooks/useFetch";
import ArticleItemView from "../pages/ArticleItemView";
import ArticlesView from "../pages/ArticlesView";
import DummyLandingPage from "../pages/DummyLandingPage";
import Merkliste from "../pages/Merkliste";
import NotFound404 from "../pages/NotFound404";
import {
  setArticleID,
  setArticleItemLocal,
} from "../redux/actions/articlesActions";
import {
  articlesReducer,
  initialState,
} from "../redux/reducers/articlesReducer";
import { AuthInitialState } from "../types/reducers.interface";
import { SearchArticle, SearchResponse } from "../types/response.types";

const HomeRouter: React.FC<{
  routing: RouteComponentProps;
  theme: boolean;
  authState: AuthInitialState;
}> = (props) => {
  const [articles, setArticles] = useState<SearchArticle[]>([]);
  const { httpRequest: fetchArticles } = useFetch();
  const [articlesState, articlesDispatch] = useReducer(
    articlesReducer,
    initialState
  );

  const { getSelectedArticlesIdAsync } = useDummyDbStorage();
  const dbDispatchLocalStorage = useDispatch();

  useEffect(() => {
    const setIdsHandler = async () => {
      const response = await getSelectedArticlesIdAsync();
      articlesDispatch(setArticleID(response?.selectedItemsArr!));
      articlesDispatch(setArticleItemLocal(response?.itemsDBLocal!));
    };
    setIdsHandler();
  }, [dbDispatchLocalStorage, getSelectedArticlesIdAsync]);
  useEffect(() => {
    fetchArticles(
      {
        endpoint: "search",
        params: `searchText=nintendo`,
        method: "GET",
      },
      (dataComponent) => {
        const results = dataComponent as SearchResponse;
        setArticles(results.articles);
      }
    );
  }, [fetchArticles]);
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home-exercise" />
        </Route>
        <Route path="/home-exercise/merkliste">
          {props.authState.isLoggedIn ? (
            <Merkliste
              theme={props.theme}
              articlesDispatch={articlesDispatch}
              selectedItems={articlesState.selectedItemsLocalStorage}
            />
          ) : (
            <Redirect to="/auth/login" />
          )}
        </Route>
        <Route exact path="/home-exercise">
          <DummyLandingPage theme={props.theme} dummyItems={articles || []} />
        </Route>
        <Route path="/home-exercise/search/:searchText">
          <ArticlesView
            theme={props.theme}
            articlesState={articlesState}
            articlesDispatch={articlesDispatch}
          />
        </Route>
        <Route path="/home-exercise/article/:articleId">
          <ArticleItemView theme={props.theme} />
        </Route>
        <Route path="*">
          <NotFound404 theme={props.theme} />
        </Route>
      </Switch>
    </>
  );
};

export default HomeRouter;
