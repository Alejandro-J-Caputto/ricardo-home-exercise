import {
  ArticleDetails,
  SearchArticle,
  SearchResponse,
  User,
} from "../../types/response.types";
import { httpRequest } from "../../utils/httpRequest";
import { ArticleTypes } from "../action-types/actions.types";
import { AppDispatch, RootState } from "../store/store";
import { setLoadingHttp } from "./uiActions";

export const fetchAllArticlesByText = (value: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoadingHttp());
      await httpRequest(
        {
          endpoint: "search",
          params: `searchText=${value}`,
          method: "GET",
        },
        (dataComponent) => {
          const results = dataComponent as SearchResponse;
          dispatch(setArticles(results.articles));
          dispatch(setLoadingHttp());
        }
      );
    } catch (error) {
      console.log(error);
      dispatch(setLoadingHttp());
    }
  };
};
export const fetchArticleById = (value: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoadingHttp());

    try {
      await httpRequest({
        endpoint: "article-details",
        params: `articleId=${value}`,
        method: "GET",
      }).then(async (data: ArticleDetails) => {
        await httpRequest(
          {
            endpoint: "user",
            params: `userId=${data.sellerId}`,
            method: "GET",
          },
          (userApi) => {
            const user = userApi as User;
            dispatch(setArticleByID(data));
            dispatch(setUserSellerById(user));
            dispatch(setLoadingHttp());
          }
        );
      });
    } catch (error) {
      console.warn(error);
      dispatch(setLoadingHttp());
    }
  };
};

export const setArticleIdAsync = (id: string, article: SearchArticle) => {
  return async (dispatch: AppDispatch) => {
    let selectedItemsArr;
    let itemsDBLocal;

    if (
      !localStorage.getItem("selectedItems") &&
      !localStorage.getItem("itemsDBLocal")
    ) {
      selectedItemsArr = [];
      selectedItemsArr.push(id);
      localStorage.setItem("selectedItems", JSON.stringify(selectedItemsArr));
      itemsDBLocal = [];
      itemsDBLocal.push(article);
      localStorage.setItem("itemsDBLocal", JSON.stringify(itemsDBLocal));
      dispatch(setArticleItemLocal(itemsDBLocal));
    } else {
      selectedItemsArr = JSON.parse(
        localStorage.getItem("selectedItems")!
      ) as string[];
      itemsDBLocal = JSON.parse(
        localStorage.getItem("itemsDBLocal")!
      ) as SearchArticle[];

      if (selectedItemsArr.includes(id)) {
        const unselectItemID = selectedItemsArr.filter(
          (el: string) => el !== id
        );
        const unselectItemRemoved = itemsDBLocal.filter(
          (art: SearchArticle) => art.id !== article.id
        );
        localStorage.setItem("selectedItems", JSON.stringify(unselectItemID));
        localStorage.setItem(
          "itemsDBLocal",
          JSON.stringify(unselectItemRemoved)
        );

        dispatch(setArticleID(unselectItemID));
        dispatch(setArticleItemLocal(unselectItemRemoved));
        return;
      }

      selectedItemsArr.push(id);
      localStorage.setItem("selectedItems", JSON.stringify(selectedItemsArr));
      itemsDBLocal.push(article);
      localStorage.setItem("itemsDBLocal", JSON.stringify(itemsDBLocal));
      dispatch(setArticleID(selectedItemsArr));
      dispatch(setArticleItemLocal(itemsDBLocal));
    }
  };
};

export const unsetSelectedArticleAsync = (id: string) => {
  return async (dispatch: AppDispatch, getState: RootState) => {
    const articlesState = getState.articles;
    const articlesIDs = [...articlesState.savedArticlesIDs];
    const articlesDBLocal = [...articlesState.selectedItemsLocalStorage];
    const updatedArticlesID = articlesIDs.filter((article) => article !== id);
    const updatedArticlesDB = articlesDBLocal.filter(
      (articleDB: SearchArticle) => articleDB.id !== +id
    );
    localStorage.setItem(
      "selectedItems",
      JSON.stringify(`${updatedArticlesID}`)
    );
    localStorage.setItem(
      "itemsDBLocal",
      JSON.stringify(`${updatedArticlesDB}`)
    );
    dispatch(setArticleID(updatedArticlesID));
    dispatch(setArticleItemLocal(updatedArticlesID));
  };
};

export const getSelectedArticlesIdAsync = () => {
  return async (dispatch: AppDispatch) => {
    if (
      !localStorage.getItem("selectedItems") ||
      !localStorage.getItem("itemsDBLocal")
    ) {
      return;
    }
    const selectedItemsArr = JSON.parse(
      localStorage.getItem("selectedItems")!
    ) as string[];
    const itemsDBLocal = JSON.parse(
      localStorage.getItem("itemsDBLocal")!
    ) as SearchArticle[];
    dispatch(setArticleID(selectedItemsArr));
    dispatch(setArticleItemLocal(itemsDBLocal));
  };
};

export const postItemLocalAsync = (article: SearchArticle) => {
  return async (dispatch: AppDispatch) => {
    let itemsDBLocal;
    if (!localStorage.getItem("itemsDBLocal")) {
      itemsDBLocal = [];
      itemsDBLocal.push(article);
      localStorage.setItem("itemsDBLocal", JSON.stringify(itemsDBLocal));
      dispatch(setArticleItemLocal(itemsDBLocal));
    } else {
      itemsDBLocal = JSON.parse(
        localStorage.getItem("itemsDBLocal")!
      ) as SearchArticle[];
      itemsDBLocal.push(article);
      localStorage.setItem("itemsDBLocal", JSON.stringify(itemsDBLocal));
      dispatch(setArticleItemLocal(itemsDBLocal));
    }
  };
};

export const setArticles = (articles: SearchArticle[]) => ({
  type: ArticleTypes.articlesGetBySearch,
  payload: articles,
});
export const setArticleByID = (article: ArticleDetails) => ({
  type: ArticleTypes.articlesGetById,
  payload: article,
});
export const setUserSellerById = (seller: User) => ({
  type: ArticleTypes.articleUserSeller,
  payload: seller,
});

export const setArticleID = (ids: string[]) => ({
  type: ArticleTypes.articleStoreId,
  payload: ids,
});

export const setArticleItemLocal = (article: SearchArticle[]) => ({
  type: ArticleTypes.articleStoreItem,
  payload: article,
});
