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

const RicardoApp: React.FC = () => {
  return (
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
              path="/home-exercise"
              component={(props: RouteComponentProps) => (
                <HomeRouter routing={props} />
              )}
            />
          </Switch>
        </Router>
      </AppRouter>
    </RicardoWrapper>
  );
};

export default RicardoApp;
