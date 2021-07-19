import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { articlesReducer } from "../reducers/articlesReducer";
import thunk from "redux-thunk";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({ articles: articlesReducer });

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
