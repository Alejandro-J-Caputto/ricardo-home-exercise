import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { SearchArticle } from "../../types/response.types";
import SavedItems from "./SavedItems";

const VisitedArticles = () => {
  const articlesState = useSelector((state: RootState) => state.articles);

  const { selectedItemsLocalStorage } = articlesState;
  console.log(selectedItemsLocalStorage);
  return (
    <ul className="marked-items__list">
      {selectedItemsLocalStorage.map((el: SearchArticle) => (
        <SavedItems key={el.id} itemsContent={el} />
      ))}
    </ul>
  );
};

export default VisitedArticles;
