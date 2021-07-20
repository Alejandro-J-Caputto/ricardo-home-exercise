import { ArticleDetails, SearchArticle, User } from "./response.types";

export interface ArticleInitialState {
    articles: SearchArticle[];
    articlesById: ArticleDetails ,
    sellerById: User
}