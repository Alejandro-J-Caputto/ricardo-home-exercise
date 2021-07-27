import {
  Route,
  Switch,
  BrowserRouter as Router,
  RouteComponentProps,
} from "react-router-dom";
import AppRouter from "./routers/AppRouter";
import RicardoWrapper from "./layout/RicardoWrapper";
import MainNav from "./layout/MainNav";
import AuthRouter from "./routers/AuthRouter";
import HomeRouter from "./routers/HomeRouter";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import Footer from "./layout/Footer";
import { useState } from "react";
import { useReducer } from "react";
import { authInitialState, authReducer } from "./redux/reducers/authReducer";
import { useEffect } from "react";

const init = () => {
  return (
    JSON.parse(localStorage.getItem("user")!) || {
      ...authInitialState,
      isLoggedIn: false,
    }
  );
};

const RicardoApp: React.FC = () => {
  const [authState, authDispatcher] = useReducer(
    authReducer,
    authInitialState,
    init
  );
  const [theme, setTheme] = useState<boolean>(false);
  const themeHandler: () => void = () => {
    setTheme((prevVal) => !prevVal);
  };
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(authState))
  }, [authState])
  return (
    <Provider store={store}>
      <RicardoWrapper theme={theme}>
        <AppRouter>
          <Router>
            <MainNav onThemeHandler={themeHandler} theme={theme} authState={authState}/>
            <Switch>
              <Route
                path="/auth"
                component={(props: RouteComponentProps) => (
                  <AuthRouter
                    routing={props}
                    theme={theme}
                    authDispatcher={authDispatcher}
                    authState={authState}
                  />
                )}
              />
              <Route
                path="/"
                component={(props: RouteComponentProps) => (
                  <HomeRouter routing={props} theme={theme}  authState={authState}/>
                )}
              />
            </Switch>
            <Footer />
          </Router>
        </AppRouter>
      </RicardoWrapper>
    </Provider>
  );
};

export default RicardoApp;
function authReducher(
  authReducher: any,
  authInitialState: any,
  init: () => any
): [any, any] {
  throw new Error("Function not implemented.");
}
