import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ArticlesContainer from "../components/articles/ArticlesContainer";
import { fetchAllArticlesByText } from "../redux/actions/articlesActions";
import { RootState } from "../redux/store/store";
import { ArticleInitialState } from "../types/reducers.interface";

const ArticlesView: React.FC<{}> = (props) => {
  const { searchText: enteredText } = useParams<{ searchText: string }>();
  const isLoading = false;
  const articlesDispatch = useDispatch();
  const articlesState: ArticleInitialState = useSelector(
    (state: RootState) => state.articles
  );
  const { articles } = articlesState;
  useEffect(() => {
    articlesDispatch(fetchAllArticlesByText("nintendo"));
  }, [enteredText, articlesDispatch]);
  console.log(articles);
  return (
    <>
      <section className="container">
        <ArticlesContainer items={articles} isLoading={isLoading} />
      </section>
    </>
  );
};

export default ArticlesView;
