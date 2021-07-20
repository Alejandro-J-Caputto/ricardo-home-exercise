import { AnyAction } from "redux";
import { UIinitialState } from "../../types/reducers.interface";
import { UILoadingTypes } from "../action-types/actions.types";

const initialState: UIinitialState = {
  loadingHTTP: false,
  loadingApp: false,
};

export const uiReducer = (
  state: UIinitialState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case UILoadingTypes.uiLoadingHttp:
      return {
        ...state,
        loadingHTTP: !state.loadingHTTP,
      };
    case UILoadingTypes.uiLoadingApp:
      return {
        ...state,
        loadingApp: !state.loadingApp,
      };

    default:
      return state;
  }
};
