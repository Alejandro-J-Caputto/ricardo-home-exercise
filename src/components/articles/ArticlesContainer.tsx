import { SearchArticle } from "../../types/response.types";
import ArticleItem from "./ArticleItem";

const ArticlesContainer: React.FC<{ items: SearchArticle[], isLoading:boolean }> = (props) => {
  const { items, isLoading } = props;
  return (
    <>
      {isLoading === false ? <p className="count-result">Total Count: {items.length + 1} </p> : null}

      <div className="articles-grid">
        {!items.length && !isLoading ? (
          <h2>NO RESULTS FOUND</h2>
        ) : (
          items.map((el) => <ArticleItem key={el.id} itemsContent={el} />)
        )}
      </div>
    </>
  );
};

export default ArticlesContainer;
