import ArticleItem from "./ArticleItem";

const ArticlesContainer: React.FC = () => {
  const tempArr = ['uno', 'dos', '3', '5', 'patata'];
  return (
    <div className="articles-grid">
      {tempArr.map(el => <ArticleItem key={el}/>)}
    </div>
  );
};

export default ArticlesContainer;
