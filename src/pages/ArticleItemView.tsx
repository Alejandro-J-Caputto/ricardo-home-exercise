import { useRef } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../redux/actions/articlesActions";
import { RootState } from "../redux/store/store";
import { ArticleInitialState } from "../types/reducers.interface";
const ArticleItemView: React.FC<{}> = (props) => {
  const descriptionContainer = useRef<HTMLDivElement>(null)!;
  const { articleId } = useParams<{ articleId: string }>();
  const articlesDispatch = useDispatch();

  
  const articleState: ArticleInitialState = useSelector(
    (state: RootState) => state.articles
  );


  const { sellerById, articlesById } = articleState;

  const setInnerHtml = useCallback(
    (mark: string) => {
      if (!mark) {
        return;
      }
      descriptionContainer.current!.innerHTML = mark;
    },
    [descriptionContainer]
  );

  useEffect(() => {
    articlesDispatch(fetchArticleById(articleId));
  }, [articleId, articlesDispatch]);

  useEffect(() => {
    setInnerHtml(articlesById.descriptionHtml);
  }, [articlesById.descriptionHtml, setInnerHtml]);
  return (
    <div className="container">
      <div className="card">
        <div className="card-container">
          <img
            src={articlesById.imageUrl}
            alt="test"
            className="card-container__image"
          />
        </div>
        <div className="card-body">
          <div className="card-body__title">
            <h2>{articlesById.title}</h2>
          </div>
          <div className="card-body__info">
            <div className="">
              <p>
                <span> Seller:</span> {sellerById.name}
              </p>
              <p>
                <span> Price: </span>
                {articlesById.price} CHF
              </p>
            </div>
          </div>
          <div
            ref={descriptionContainer}
            className="card-body__description"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ArticleItemView;
