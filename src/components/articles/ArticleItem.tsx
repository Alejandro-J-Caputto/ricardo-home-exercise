const ArticleItem = () => {
  return (
    <div className="article">
      <div className="article-head">
        <img
          src="https://img.ricardostatic.ch/t_200x150/pl/1156344582/4/1/garderobe-schal-haken.jpg"
          alt="test article"
          className="article-head__img"
        />
      </div>
      <div className="article-body">
        <div className="article-body__title">
          <p className="heading-article">Ukelele</p>
        </div>
        <div className="article-body__date">
          <p>
            <span>Ending on:</span>
            <span>2021-06-20 at</span>
          </p>
          <p>
            <span>20:20:20</span>
          </p>
        </div>
        <div className="article-body__price">
          <p>1250 CHF</p>
        </div>
      </div>
    </div>
  );
};
export default ArticleItem;
