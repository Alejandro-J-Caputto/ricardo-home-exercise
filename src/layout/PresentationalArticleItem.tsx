import React from "react";
import { Link } from "react-router-dom";
import { SearchArticle } from "../types/response.types";

export const PresentationalArticleItem: React.FC<{
  itemsContent: SearchArticle;
  theme:boolean
}> = (props) => {
  const { buyNowPrice, endDate, id, imageUrl, title } = props.itemsContent;
  const dateFormat = new Date(endDate).toISOString().split("T");
  const date = dateFormat[0];
  const time = dateFormat[1].slice(0, 5);
  return (
    <div className= {`article ${props.theme && 'dark'}`} data-id={id}>
      <div className="article-head">
        <img src={imageUrl} alt="test article" className="article-head__img" />
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
          <div className="price">
            {buyNowPrice ? <p>{buyNowPrice} CHF</p> : <p>Keine preis</p>}
          </div>
          <Link className="btn btn-card" to={`/home-exercise/article/${id}`}>
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};
