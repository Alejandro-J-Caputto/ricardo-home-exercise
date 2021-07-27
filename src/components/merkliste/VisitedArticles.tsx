import { useDispatch, useSelector } from "react-redux";
import { setArticleIdAsync } from "../../redux/actions/articlesActions";
import { RootState } from "../../redux/store/store";
import { SearchArticle } from "../../types/response.types";
import SavedItems from "./SavedItems";
import placeholderIMG from "../../assets/img/Data Collecting_Two Color.svg";
const VisitedArticles = () => {
  const articlesState = useSelector((state: RootState) => state.articles);
  const { selectedItemsLocalStorage } = articlesState;

  const dbDispatchLocalStorage = useDispatch();

  const selectItemHandler = (id: string, article: SearchArticle) => {
    dbDispatchLocalStorage(setArticleIdAsync(id, article));
  };
  //TODO:USE EVENT DELEGATION, ONE SINGLE EVENT LISTENER, PERFORMANCE COST
  const UI = useSelector((state: RootState) => state.uiLoading);

  const { uiTheme } = UI;
  return (
    <div>
      {!selectedItemsLocalStorage.length ? (
        <div className="articles-empty">
          <h1>Please, add an item first</h1>
          <img src={placeholderIMG} alt="ilustration" />
        </div>
      ) : null}
      <ul className="marked-items__list">
        {selectedItemsLocalStorage.map((el: SearchArticle) => (
          <SavedItems
            key={el.id}
            itemsContent={el}
            uiTheme={uiTheme}
            onSelect={selectItemHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default VisitedArticles;
