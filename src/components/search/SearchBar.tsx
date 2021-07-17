const SearchBar: React.FC = () => {
  console.log("me dispare desde el componente");
  // const [articleInputState, setarticleInputState] = useState("ukelele");
  // const { isLoading, httpRequest } = useFetch();
  // const [articles, setArticles] = useState<SearchArticle[]>([]);

  // const fetchArticles: cbData = useCallback((dataComponent) => {
  //   const results = dataComponent as SearchResponse;
  //   setArticles(results.articles);
  // }, []);

  // const searchInputHandler = async () => {
  //   httpRequest(
  //     {
  //       endpoint: "search",
  //       params: `searchText=${articleInputState}`,
  //       method: "GET",
  //     },
  //     (dataComponent) => {
  //       const results = dataComponent as SearchResponse;
  //       setArticles(results.articles);
  //     }
  //   );
  // };

  return (
    <div className="searchBar">
      <form className="searchBar-group">
        <input
          type="text"
          id="search"
          placeholder="Search Article"
          className="searchBar-group__input"
          autoComplete="off"
        />
        <label htmlFor="search" className="searchBar-group__label">
          Search Article
        </label>
        <button className="btn btn-search">
          <i className="fas fa-search"></i>
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
