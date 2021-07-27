import { AuthInitialState } from "../../types/reducers.interface";
import { AuthTypes } from "../action-types/actions.types";

export const logIn = (form: AuthInitialState) => ({
    type: AuthTypes.authLogin,
    payload: form
})

export const logOut = () => ({
    type: AuthTypes.authLogout,
    payload: null
})