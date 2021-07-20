import { SearchArticle } from "../../types/response.types";
import ArticleItem from "./ArticleItem";

const ArticlesContainer: React.FC<{
  items: SearchArticle[];
  isLoading: boolean;
}> = (props) => {
  const { items, isLoading } = props;
  return (
    <>
      {!isLoading ? (
        <p className="count-result">Total Count: {items.length + 1} </p>
      ) : null}

      <div className="articles-grid">
        {isLoading ? (
          <div className="spinner"></div>
        ) : (
          items.map((el) => <ArticleItem key={el.id} itemsContent={el} />)
        )}
      </div>
    </>
  );
};

export default ArticlesContainer;
