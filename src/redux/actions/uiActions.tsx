import { UI, UILoadingTypes } from "../action-types/actions.types";


export const setLoadingHttp = () => ({
    type: UILoadingTypes.uiLoadingHttp,
    payload: null
})
export const setLoadingApp = () => ({
    type: UILoadingTypes.uiLoadingApp,
    payload: null
})

export const toggleTheme = () => ({
    type: UI.uiChangeTheme,
    payload: null
})