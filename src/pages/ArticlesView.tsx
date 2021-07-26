import { Dispatch, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AnyAction } from "redux";
import ArticlesContainer from "../components/articles/ArticlesContainer";
import useFetch from "../hooks/useFetch";
import { ArticleInitialState } from "../types/reducers.interface";
import { SearchArticle, SearchResponse } from "../types/response.types";

const ArticlesView: React.FC<{ theme: boolean; articlesDispatch:Dispatch<AnyAction>; articlesState:ArticleInitialState }> = (props) => {
  const { searchText: enteredText } = useParams<{ searchText: string }>();
  const [articles, setArticles] = useState<SearchArticle[]>([]);
  const { httpRequest: fetchArticles, isLoading } = useFetch();

  useEffect(() => {
    fetchArticles(
      {
        endpoint: "search",
        params: `searchText=${enteredText}`,
        method: "GET",
      },
      (dataComponent) => {
        const results = dataComponent as SearchResponse;
        setArticles(results.articles);
      }
    );
  }, [enteredText, fetchArticles]);
  return (
    <>
      <section className="container">
        <ArticlesContainer
          theme={props.theme}
          items={articles}
          isLoading={isLoading}
          articlesDispatch={props.articlesDispatch}
          articlesState={props.articlesState}
        />
      </section>
    </>
  );
};

export default ArticlesView;
