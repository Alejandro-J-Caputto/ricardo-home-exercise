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
    sellerName: "",
  },
};

export const articlesReducer = (
  state: ArticleInitialState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case ArticleTypes.articlesGetBySearch:
      return {
        ...initialState,
        articles: [...action.payload],
      };
    case ArticleTypes.articlesGetById:
      return {
        ...initialState,
        ariclesById: { ...action.payload },
      };
    default:
      return initialState;
  }
};
