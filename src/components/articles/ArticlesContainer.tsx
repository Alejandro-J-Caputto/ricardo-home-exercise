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

const ArticlesContainer: React.FC<{
  items: SearchArticle[];
  isLoading: boolean;
}> = (props) => {
  const dbDispatchLocalStorage = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const { items, isLoading } = props;
  const articlesPerPage = 20;
  const [pageNumber, setPageNumber] = useState(1);
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

  return (
    <div>
      <div className="container-np">
        <div className="filterItem">
          <form className="filterItem-group">
            <input
              autoComplete="off"
              type="text"
              name="filter"
              placeholder="Filter by name"
              value={searchTerm}
              onChange={handleInputChange}
              id="filter"
              className="filterItem__input"
            />
            <label htmlFor="filter" className="filterItem__label">
              Filter
            </label>
          </form>
        </div>
        {!isLoading ? (
          <p className="count-result">
            Total Count: {displayedArticles.length}{" "}
          </p>
        ) : null}

        <div className="articles-grid">
          {isLoading ? (
            <div className="spinner"></div>
          ) : filteredArticles.length ? (
            filteredArticles.map((el) => {
              return (
                <ArticleItem
                  key={el.id}
                  itemsContent={el}
                  onSelect={selectItemHandler}
                  onStoreItem={storeItemHandler}
                  selected={selectedItems.includes(`${el.id}`) ? true : false}
                />
              );
            })
          ) : (
            <p className="not-found__msg">Not Found</p>
          )}
        </div>
        {filteredArticles.length ? (
          <div className="load-next">
            <button className="btn btn-card" onClick={pageNumberHandler}>
              LOAD MORE
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ArticlesContainer;
