import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticlesContainer from "../components/articles/ArticlesContainer";
import useFetch from "../hooks/useFetch";
import { SearchArticle, SearchResponse } from "../types/response.types";

const ArticlesView: React.FC<{ theme: boolean }> = (props) => {
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
        />
      </section>
    </>
  );
};

export default ArticlesView;
