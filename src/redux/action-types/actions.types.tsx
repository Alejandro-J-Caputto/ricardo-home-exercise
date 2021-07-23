export const ArticleTypes = {
  articlesGetBySearch: "[Articles] Fetch Articles by param",
  articlesGetById: "[Articles] Fetch an article by ID",
  articleFilterByDate: "[Articles] Sort the Articles by date",
  articleFilterByPrice: "[Articles] Sort by Price",
  articleFilterByName: "[Articles] Filter article by name",
  articleUserSeller: "[Articles] User seller by ID",
  articleStoreId: "[Article] Store ID Localstorage",
  articleStoreItem: "[Article] Store ITEM Localstorage",
};

export const UINotificationTypes = {
  uiDisplayNotification: "[UI-N] Display Notification",
  uiHideNotification: "[UI-N] Hide Notification",
  uiSetNotificationContent: "[UI-N] Set Notification Content",
};

export const UILoadingTypes = {
  uiLoadingApp: "[UI] Loads while check the current token",
  uiLoadingHttp: "[UI] For small operations",
  uiSetError: "[UI] Set Error",
  uiRemoveError: "[UI] Remove Error",
};

export const AuthTypes = {
  authLogin: "[Auth]Login",
  authRegister: "[Auth] Register",
  authLogout: "[Auth]Logout",
};
