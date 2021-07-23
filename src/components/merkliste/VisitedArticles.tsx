import { useDispatch, useSelector } from "react-redux";
import { setArticleIdAsync } from "../../redux/actions/articlesActions";
import { RootState } from "../../redux/store/store";
import { SearchArticle } from "../../types/response.types";
import SavedItems from "./SavedItems";

const VisitedArticles = () => {
  const articlesState = useSelector((state: RootState) => state.articles);
  const { selectedItemsLocalStorage } = articlesState;

  const dbDispatchLocalStorage = useDispatch();

  const selectItemHandler = (id: string, article: SearchArticle) => {
    dbDispatchLocalStorage(setArticleIdAsync(id, article));
  };
  //TODO:USE EVENT DELEGATION, ONE SINGLE EVENT LISTENER, PERFORMANCE COST
  return (
    <ul className="marked-items__list">
      {selectedItemsLocalStorage.map((el: SearchArticle) => (
        <SavedItems
          key={el.id}
          itemsContent={el}
          onSelect={selectItemHandler}
        />
      ))}
    </ul>
  );
};

export default VisitedArticles;
