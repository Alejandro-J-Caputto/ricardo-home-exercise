import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedArticlesIdAsync, postItemLocalAsync, setArticleIdAsync } from "../../redux/actions/articlesActions";
import { RootState } from "../../redux/store/store";

import { SearchArticle } from "../../types/response.types";
import ArticleItem from "./ArticleItem";

const ArticlesContainer: React.FC<{
  items: SearchArticle[];
  isLoading: boolean;
}> = (props) => {
  const { items, isLoading } = props;
  const dbDispatchLocalStorage = useDispatch();
  const [isSelected, setIsSelected] = useState(false);
  
  const storeItemHandler = (article:SearchArticle) => {
    dbDispatchLocalStorage(postItemLocalAsync(article))
  }
  const selectedItems = useSelector((state:RootState) => state.articles.savedArticlesIDs)
  const selectItemHandler = (id:string, article: SearchArticle) => {
    dbDispatchLocalStorage(setArticleIdAsync(id, article))
  }
  useEffect(() => {
    dbDispatchLocalStorage(getSelectedArticlesIdAsync())
  }, [dbDispatchLocalStorage])
  return (
    <>
      {!isLoading ? (
        <p className="count-result">Total Count: {items.length + 1} </p>
      ) : null}

      <div className="articles-grid">
        {isLoading ? (
          <div className="spinner"></div>
        ) : (
          items.map((el) => <ArticleItem key={el.id} itemsContent={el} onSelect={selectItemHandler} onStoreItem={storeItemHandler} selected={selectedItems.includes(`${el.id}`) ? true : false} />)
        )}
      </div>
    </>
  );
};

export default ArticlesContainer;
