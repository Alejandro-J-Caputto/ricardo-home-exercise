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

const RicardoApp: React.FC = () => {
  const [theme, setTheme] = useState<boolean>(false);
  const themeHandler: () => void = () => {
    setTheme((prevVal) => !prevVal);
  };
  return (
    <Provider store={store}>
      <RicardoWrapper theme={theme}>
        <AppRouter>
          <Router>
            <MainNav onThemeHandler={themeHandler} theme={theme} />
            <Switch>
              <Route
                path="/auth"
                component={(props: RouteComponentProps) => (
                  <AuthRouter routing={props} theme={theme} />
                )}
              />
              <Route
                path="/"
                component={(props: RouteComponentProps) => (
                  <HomeRouter routing={props} theme={theme} />
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
