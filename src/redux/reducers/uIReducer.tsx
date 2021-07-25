import { AnyAction } from "redux";
import { UIinitialState } from "../../types/reducers.interface";
import { UI, UILoadingTypes } from "../action-types/actions.types";

const initialState: UIinitialState = {
  loadingHTTP: false,
  loadingApp: false,
  uiTheme: false,
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
    case UI.uiChangeTheme:
      return {
        ...state,
        uiTheme: !state.uiTheme,
      };
    default:
      return state;
  }
};
