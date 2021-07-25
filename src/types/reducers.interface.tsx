import { ArticleDetails, SearchArticle, User } from "./response.types";

export interface ArticleInitialState {
  articles: SearchArticle[];
  articlesById: ArticleDetails;
  sellerById: User;
  savedArticlesIDs: string[];
  selectedItemsLocalStorage: SearchArticle[];
}

export interface UIinitialState {
  loadingHTTP: boolean;
  loadingApp: boolean;
  uiTheme: boolean;
}
