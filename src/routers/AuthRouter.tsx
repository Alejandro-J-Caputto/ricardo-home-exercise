import { Redirect, Route, RouteComponentProps, Switch } from "react-router-dom";
import { LoginForm } from "../components/auth/LoginForm";
import { RegisterForm } from "../components/auth/RegisterForm";

const AuthRouter: React.FC<{ routing: RouteComponentProps, theme:boolean }> = (props) => {
  return (
    <Switch>
      <Route exact path="/auth/login" component={LoginForm} />
      <Route exact path="/auth/register" component={RegisterForm} />
      <Route exact path="*">
        <Redirect to="/home-exercise"></Redirect>
      </Route>
    </Switch>
  );
};

export default AuthRouter;
