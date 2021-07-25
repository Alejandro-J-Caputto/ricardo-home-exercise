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

const RicardoApp: React.FC = () => {
  return (
    <Provider store={store}>
      <RicardoWrapper>
        <AppRouter>
          <Router>
            <MainNav />
            <Switch>
              <Route
                path="/auth"
                component={(props: RouteComponentProps) => (
                  <AuthRouter routing={props} />
                )}
              />
              <Route
                path="/"
                component={(props: RouteComponentProps) => (
                  <HomeRouter routing={props} />
                )}
              />
            </Switch>
          </Router>
        </AppRouter>
      </RicardoWrapper>
    </Provider>
  );
};

export default RicardoApp;
