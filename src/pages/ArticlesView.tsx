import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ArticlesContainer from "../components/articles/ArticlesContainer";
import { fetchAllArticlesByText } from "../redux/actions/articlesActions";
import { RootState } from "../redux/store/store";
import {
  ArticleInitialState,
  UIinitialState,
} from "../types/reducers.interface";

const ArticlesView: React.FC<{ theme: boolean }> = (props) => {
  const { searchText: enteredText } = useParams<{ searchText: string }>();
  const articlesDispatch = useDispatch();
  const articlesState: ArticleInitialState = useSelector(
    (state: RootState) => state.articles
  );
  const uiState: UIinitialState = useSelector(
    (state: RootState) => state.uiLoading
  );
  const { loadingHTTP } = uiState;
  const { articles } = articlesState;
  useEffect(() => {
    articlesDispatch(fetchAllArticlesByText(enteredText));
  }, [enteredText, articlesDispatch]);
  return (
    <>
      <section className="container">
        <ArticlesContainer items={articles} isLoading={loadingHTTP} />
      </section>
    </>
  );
};

export default ArticlesView;
