import { AnyAction } from "redux";
import { AuthInitialState } from "../../types/reducers.interface";
import { AuthTypes } from "../action-types/actions.types";

export const authInitialState: AuthInitialState = {
  name: "",
  email: "",
  isLoggedIn: false,
};

export const authReducer = (
  state: AuthInitialState = authInitialState,
  action: AnyAction
) => {
  switch (action.type) {
    case AuthTypes.authLogin:
      return {
        name: action.payload.name,
        email: action.payload.email,
        isLoggedIn: true,
      };
    case AuthTypes.authLogout:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
