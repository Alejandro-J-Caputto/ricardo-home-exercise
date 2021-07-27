import { Redirect, Route, RouteComponentProps, Switch } from "react-router-dom";
import { AnyAction } from "redux";
import { LoginForm } from "../components/auth/LoginForm";
import { RegisterForm } from "../components/auth/RegisterForm";
import { AuthInitialState } from "../types/reducers.interface";

const AuthRouter: React.FC<{
  authState: AuthInitialState;
  routing: RouteComponentProps;
  theme: boolean;
  authDispatcher: React.Dispatch<AnyAction>;
}> = (props) => {
  return (
    <div className="auth">
      <Switch>
        <Route
          exact
          path="/auth/login"
          component={() => {
            return !props.authState.isLoggedIn ? (
              <LoginForm
                theme={props.theme}
                authDispatcher={props.authDispatcher}
              />
            ) : (
              <Redirect to="/home-exercise" />
            );
          }}
        />
        <Route exact path="/auth/register" component={RegisterForm} />
        <Route exact path="*">
          <Redirect to="/home-exercise"></Redirect>
        </Route>
      </Switch>
    </div>
  );
};

export default AuthRouter;
