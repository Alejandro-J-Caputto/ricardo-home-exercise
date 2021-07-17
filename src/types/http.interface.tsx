import {
  ArticleResponse,
  GetUserResponse,
  SearchResponse,
} from "./response.types";

export default interface HttpConfig {
  endpoint: string;
  params: string;
  method?: string;
  headers?: Headers;
  body?: any;
}

export type cbData = (data?: GetUserResponse | ArticleResponse | SearchResponse) => void;
