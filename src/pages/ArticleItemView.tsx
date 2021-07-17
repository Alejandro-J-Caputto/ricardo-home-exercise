import { useCallback } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { ArticleDetails, ArticleResponse, User } from "../types/response.types";
const ArticleItemView: React.FC<{}> = (props) => {
  console.log("me dispare");
  const [article, setArticle] = useState<ArticleDetails>();
  const { articleId } = useParams<{ articleId: string }>();
  const { httpRequest } = useFetch();
  const promises = useCallback(async () => {
    const data = await httpRequest({
      endpoint: "article-details",
      params: `articleId=${articleId}`,
      method: "GET",
    });
    return data;
  }, [articleId, httpRequest]);
  useEffect(() => {
    promises().then((data: ArticleDetails) => {
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
        }
      );
    });
    return () => {};
  }, [httpRequest, promises]);

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
            <p>
              {" "}
              <span> Seller:</span> {article?.sellerName}
            </p>
            <p>
              {" "}
              <span> Price: </span>9000 CHF
            </p>
          </div>
          <div className="card-body__description">
            <div className="card-body__description-title">
              <p>Arnold Schwarzenegger Predator Edition</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                reiciendis fugit ab quia facilis. Tempore, consequatur ducimus.
                Consequatur, velit fuga ut adipisci omnis cum eligendi nisi odit
                architecto debitis dicta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleItemView;
