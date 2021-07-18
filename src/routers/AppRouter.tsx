
import { Route, Switch, Redirect } from "react-router-dom";
import SearchBar from "../components/search/SearchBar";
import useFetch from "../hooks/useFetch";
import ArticleItemView from "../pages/ArticleItemView";
import ArticlesView from "../pages/ArticlesView";
import NotFound404 from "../pages/NotFound404";

const AppRouter: React.FC = () => {
  console.log('me dispare router');
  const {httpRequest, isLoading} = useFetch();
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home-exercise" />
      </Route>
      <Route path="/home-exercise" exact>
        <SearchBar />
      </Route>
      <Route path="/home-exercise/search/:searchText" exact>
        <ArticlesView onSubmitRequest={httpRequest} isLoading={isLoading}/>
      </Route>
      <Route path="/home-exercise/article/:articleId">
        <ArticleItemView />
      </Route>
      <Route path='*'>
        <NotFound404/>
      </Route>
    </Switch>
  );
};

export default AppRouter;
