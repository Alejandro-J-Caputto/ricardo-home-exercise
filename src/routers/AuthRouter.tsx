import { Route, RouteComponentProps, Switch } from "react-router-dom";
import { LoginForm } from "../components/auth/LoginForm";
import { RegisterForm } from "../components/auth/RegisterForm";


const AuthRouter:React.FC<{routing:RouteComponentProps}> = (props) => {

  return (
    <Switch>
      <Route exact  path="/auth/login" component={LoginForm} />
      <Route exact path="/auth/register" component={RegisterForm} />
    </Switch>
  );
};

export default AuthRouter;
