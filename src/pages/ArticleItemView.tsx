import { useRef } from "react";
import { useCallback } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { ArticleDetails, User } from "../types/response.types";
const ArticleItemView: React.FC<{}> = (props) => {
  const descriptionContainer = useRef<HTMLDivElement>(null)!;
  const [article, setArticle] = useState<ArticleDetails>();
  const { articleId } = useParams<{ articleId: string }>();
  const { httpRequest } = useFetch();

  const fetchArticle = useCallback(async () => {
    const data = await httpRequest({
      endpoint: "article-details",
      params: `articleId=${articleId}`,
      method: "GET",
    });
    return data;
  }, [articleId, httpRequest]);

  const setInnerHtml = useCallback( (mark: string) => {
    if (!mark) {
      return;
    }
    descriptionContainer.current!.innerHTML = mark;
  }, [descriptionContainer]);

  useEffect(() => {
    fetchArticle()
    .then((data: ArticleDetails) => {
      httpRequest(
        {
          endpoint: "user",
          params: `userId=${data.sellerId}`,
          method: "GET",
        },
        (dataComponent) => {
          const user = dataComponent as User;
          const dataRefactorized = { sellerName: user.name, ...data };
          setArticle(dataRefactorized);
          setInnerHtml(dataRefactorized.descriptionHtml);
        }
      );
    });
    return () => {};
  }, [httpRequest, fetchArticle, setInnerHtml]);


  return (
    <div className="container">
      <div className="card">
        <div className="card-container">
          <img
            src={article?.imageUrl}
            alt="test"
            className="card-container__image"
          />
        </div>
        <div className="card-body">
          <div className="card-body__title">
            <h2>{article?.title}</h2>
          </div>
          <div className="card-body__info">
            <div className="">
              <p>
                <span> Seller:</span> {article?.sellerName}
              </p>
              <p>
                <span> Price: </span>9000 CHF
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
