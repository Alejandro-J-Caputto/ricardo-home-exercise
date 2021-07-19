import { SearchArticle, SearchResponse } from "../../types/response.types";
import { httpRequest } from "../../utils/httpRequest";
import { ArticleTypes } from "../action-types/actions.types";
import { AppDispatch } from "../store/store";

export const fetchAllArticlesByText = (value: string) => {
  return async (dispatch: AppDispatch) => {
    await httpRequest(
      {
        endpoint: "search",
        params: `searchText=${value}`,
        method: "GET",
      },
      (dataComponent) => {
        const results = dataComponent as SearchResponse;
        console.log("hello");
        dispatch(setArticles(results.articles));
      }
    );
  };
};

export const setArticles = (articles: SearchArticle[]) => ({
  type: ArticleTypes.articlesGetBySearch,
  payload: articles,
});
