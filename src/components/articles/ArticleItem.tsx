import { Link } from "react-router-dom";
import { SearchArticle } from "../../types/response.types";

const ArticleItem: React.FC<{ itemsContent: SearchArticle }> = (props) => {
  const { buyNowPrice, endDate, id, imageUrl, title } = props.itemsContent;
  const dateFormat = new Date(endDate).toISOString().split("T");
  const date = dateFormat[0];
  const time = dateFormat[1];

  return (
    <div className="article" data-id={id}>
      <Link to={`/home-exercise/article/${id}`}>
        <div className="article-head">
          <img
            src={imageUrl}
            alt="test article"
            className="article-head__img"
          />
        </div>
        <div className="article-body">
          <div className="article-body__title">
            <p className="heading-article">{title}</p>
          </div>
          <div className="article-body__date">
            <p>
              <span>Ending on:</span>
              <span>{date}</span>
            </p>
            <p>
              <span>{time}</span>
            </p>
          </div>
          <div className="article-body__price">
            {buyNowPrice ? <p>{buyNowPrice} CHF</p> : <p>Keine preis</p>}
          </div>
        </div>
      </Link>
    </div>
  );
};
export default ArticleItem;
