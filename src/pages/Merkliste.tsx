import { Route, Switch } from "react-router-dom";
import SavedArticles from "../components/merkliste/SavedArticles";
import VisitedArticles from "../components/merkliste/VisitedArticles";
import NavArticles from "../layout/NavArticles";

const Merkliste: React.FC<{theme:boolean}> = (props) => {
  return (
    <div className="container-centered">
      <div className="merkliste">
        <div className="merkliste-heading">
          <h1>MEINE MERKLISTE</h1>
        </div>
        <NavArticles />
        <div>
          <Switch>
            <Route
              exact
              path="/home-exercise/merkliste/saved"
              component={VisitedArticles}
            />
            <Route
              exact
              path="/home-exercise/merkliste/visited"
              component={SavedArticles}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
};
export default Merkliste;
