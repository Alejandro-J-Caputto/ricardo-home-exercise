export type User = {
  id: string;
  name: string;
};

export type GetUserResponse = User;

export type ArticleDetails = {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  descriptionHtml: string;
  imageUrl: string;
  sellerId: string;
};

export type ArticleResponse = ArticleDetails;

export type SearchArticle = {
  id: number;
  title: string;
  endDate: string;
  imageUrl: string;
  buyNowPrice: number;
};

export type SearchResponse = {
  articles: SearchArticle[];
  totalCount: number;
};
