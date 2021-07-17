import { SearchArticle } from "../../types/response.types";
import ArticleItem from "./ArticleItem";

const ArticlesContainer: React.FC<{ items: SearchArticle[] }> = (props) => {
  const { items } = props;
  return (
    <div className="articles-grid">
      {!items.length ? (
        <h2>NO RESULTS FOUND</h2>
      ) : (
        items.map((el) => <ArticleItem key={el.id} itemsContent={el} />)
      )}
    </div>
  );
};

export default ArticlesContainer;
