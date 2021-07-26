import { AnyAction } from "redux";
import useDummyDbStorage from "../../hooks/useDummyDbStorage";
import {
  setArticleID,
  setArticleItemLocal,
} from "../../redux/actions/articlesActions";
import { SearchArticle } from "../../types/response.types";
import SavedItems from "./SavedItems";

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
    <>
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
    </>
  );
};

export default VisitedArticles;
