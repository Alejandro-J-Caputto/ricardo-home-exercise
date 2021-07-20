export const ArticleTypes = {
  articlesGetBySearch: "[Articles] Fetch Articles by param",
  articlesGetById: "[Articles] Fetch an article by ID",
  articleFilterByDate: "[Articles] Sort the Articles by date",
  articleFilterByPrice: "[Articles] Sort by Price",
  articleFilterByName: "[Articles] Filter article by name",
  articleUserSeller: "[Articles] User seller by ID"
};

export const UINotificationTypes = {
  uiDisplayNotification: "[UI-N] Display Notification",
  uiHideNotification: "[UI-N] Hide Notification",
  uiSetNotificationContent: "[UI-N] Set Notification Content",
};

export const UILoadingTypes = {
  uiLoadingMain: "[UI] Loads while check the current token",
  uiLoadingSmall: "[UI] For small operations",
  uiSetError: "[UI] Set Error",
  uiRemoveError: "[UI] Remove Error",
};

export const AuthTypes = {
  authLogin: "[Auth]Login",
  authRegister: "[Auth] Register",
  authLogout: "[Auth]Logout",
};