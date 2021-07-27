import { AnyAction } from "redux";
import useDummyDbStorage from "../../hooks/useDummyDbStorage";
import {
  setArticleID,
  setArticleItemLocal,
} from "../../redux/actions/articlesActions";
import { SearchArticle } from "../../types/response.types";
import SavedItems from "./SavedItems";
import placeholderIMG from '../../assets/img/Data Collecting_Two Color.svg'

const VisitedArticles: React.FC<{
  theme: boolean;
  selectedItems: SearchArticle[];
  articlesDispatch: React.Dispatch<AnyAction>;
}> = (props) => {
  const { dummyLocalStorageDBHandler } = useDummyDbStorage();
  const selectItemHandler = async (id: string, article: SearchArticle) => {
    const response = await dummyLocalStorageDBHandler(id, article);
    props.articlesDispatch(setArticleItemLocal(response.itemsDBLocal!));
    props.articlesDispatch(setArticleID(response.selectedItemsArr!));
  };
  //TODO:USE EVENT DELEGATION, ONE SINGLE EVENT LISTENER, PERFORMANCE COST

  return (
    <div>
      {!props.selectedItems.length ? (
        <div className="articles-empty">
          <h1>Please, add an item first</h1>
          <img src={placeholderIMG} alt="ilustration" />
        </div>
      ) : null}
    <ul className="marked-items__list">
      {props.selectedItems.map((el: SearchArticle) => (
        <SavedItems
          key={el.id}
          itemsContent={el}
          theme={props.theme}
          onSelect={selectItemHandler}
        />
      ))}
    </ul>
    </div>
  );
};

export default VisitedArticles;
