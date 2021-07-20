import { AnyAction } from "redux";
import { ArticleInitialState } from "../../types/reducers.interface";
import { ArticleTypes } from "../action-types/actions.types";

const initialState: ArticleInitialState = {
  articles: [],
  articlesById: {
    id: "",
    title: "",
    subtitle: "",
    price: 0,
    descriptionHtml: "",
    imageUrl: "",
    sellerId: "",
  },
  sellerById: {
    id: "",
    name: "",
  },
};

export const articlesReducer = (
  state: ArticleInitialState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case ArticleTypes.articlesGetBySearch:
      return {
        ...state,
        articles: [...action.payload],
      };
    case ArticleTypes.articlesGetById:
      return {
        ...state,
        articlesById: {...action.payload},
      };
    case ArticleTypes.articleUserSeller:
      return {
        ...state,
        sellerById: { ...action.payload },
      };
    default:
      return initialState;
  }
};
