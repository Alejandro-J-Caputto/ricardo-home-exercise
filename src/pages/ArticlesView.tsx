import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticlesContainer from "../components/articles/ArticlesContainer";
// import SearchBar from "../components/search/SearchBar";
import HttpConfig, { cbData } from "../types/http.interface";
import {  SearchArticle, SearchResponse } from "../types/response.types";

const ArticlesView: React.FC<{
  onSubmitRequest: (httpConfig: HttpConfig, cbData: cbData) => Promise<void>, isLoading:boolean;
}> = (props) => {
  const { searchText: enteredText } = useParams<{ searchText: string }>();
  const [articles, setArticles] = useState<SearchArticle[]>([])
  const {onSubmitRequest, isLoading} = props;
  // console.log(enteredText);
  useEffect(() => {
    onSubmitRequest({
      endpoint: "search",
      params: `searchText=${enteredText}`,
      method: "GET",

    }, 
    (dataComponent) => {
        const results = dataComponent as SearchResponse;
        setArticles(results.articles)
      }
    );
  }, [enteredText, onSubmitRequest]);
  return (
    <>
      {/* <SearchBar /> */}
      <section className="container">
        <ArticlesContainer items={articles} isLoading={isLoading}/>
      </section>
    </>
  );
};

export default ArticlesView;
