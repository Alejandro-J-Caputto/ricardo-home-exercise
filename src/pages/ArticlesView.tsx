import ArticlesContainer from "../components/articles/ArticlesContainer";
import SearchBar from "../components/search/SearchBar";

const ArticlesView = () => {
  return (
    <>
      <SearchBar />
      <main className="articles">
        <ArticlesContainer />
      </main>
    </>
  );
};

export default ArticlesView;
