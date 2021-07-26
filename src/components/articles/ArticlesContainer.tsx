import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSelectedArticlesIdAsync,
  postItemLocalAsync,
  setArticleIdAsync,
} from "../../redux/actions/articlesActions";
import { RootState } from "../../redux/store/store";
import { SearchArticle } from "../../types/response.types";
import ArticleItem from "./ArticleItem";
import SearchFilter from "./SearchFilter";

const ArticlesContainer: React.FC<{
  items: SearchArticle[];
  isLoading: boolean;
  theme: boolean;
}> = (props) => {
  const dbDispatchLocalStorage = useDispatch();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { items, isLoading } = props;
  const articlesPerPage = 20;
  const [pageNumber, setPageNumber] = useState<number>(1);
  const limitPage = Math.ceil((items.length + 1) / articlesPerPage);
  const displayedArticles = items.slice(0, articlesPerPage * pageNumber);

  const storeItemHandler = (article: SearchArticle) => {
    dbDispatchLocalStorage(postItemLocalAsync(article));
  };
  const selectedItems = useSelector(
    (state: RootState) => state.articles.savedArticlesIDs
  );
  const selectItemHandler = (id: string, article: SearchArticle) => {
    dbDispatchLocalStorage(setArticleIdAsync(id, article));
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    dbDispatchLocalStorage(getSelectedArticlesIdAsync());
  }, [dbDispatchLocalStorage]);

  //FILTERING BY NAME
  const filteredArticles = displayedArticles.filter((el) => {
    if (searchTerm.trim() === "") {
      return el;
    }
    return el.title.toLowerCase().includes(searchTerm.toLowerCase()) && el;
  });

  //PAGINATION
  const pageNumberHandler = () => {
    if (pageNumber > limitPage) {
      return;
    }
    setPageNumber((prevVal) => prevVal + 1);
  };

  const articlesAfterLoading = isLoading ? (
    <div className="spinner"></div>
  ) : filteredArticles.length ? (
    filteredArticles.map((el) => {
      return (
        <ArticleItem
          key={el.id}
          theme={props.theme}
          itemsContent={el}
          onSelect={selectItemHandler}
          onStoreItem={storeItemHandler}
          selected={selectedItems.includes(`${el.id}`) ? true : false}
        />
      );
    })
  ) : (
    <p className="not-found__msg">Not Found</p>
  );
  const loadButton =
    filteredArticles.length && displayedArticles.length !== items.length ? (
      <div className="load-next">
        <button className="btn btn-card" onClick={pageNumberHandler}>
          LOAD MORE
        </button>
      </div>
    ) : null;
  return (
    <div>
      <div className="container-np">
        <SearchFilter
          searchTerm={searchTerm}
          handleInputChange={handleInputChange}
        />
        {!isLoading ? (
          <p className="count-result">
            Total Count: {displayedArticles.length}
          </p>
        ) : null}
        <div className="articles-grid">{articlesAfterLoading}</div>
        {loadButton}
      </div>
    </div>
  );
};

export default ArticlesContainer;
