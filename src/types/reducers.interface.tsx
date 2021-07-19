import { ArticleDetails, SearchArticle } from "./response.types";

export interface ArticleInitialState {
    articles: SearchArticle[];
    articlesById: ArticleDetails
}