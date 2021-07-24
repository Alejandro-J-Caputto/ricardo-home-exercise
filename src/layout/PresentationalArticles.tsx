import React from "react";

import { SearchArticle } from "../types/response.types";
import { PresentationalArticleItem } from "./PresentationalArticleItem";

export const PresentationalArticles: React.FC<{ dummyItems: SearchArticle[] }> =
  (props) => {
    return (
      <div className="articles-grid">
        {props.dummyItems.slice(0, 15).map((el) => {
          return <PresentationalArticleItem key={el.id} itemsContent={el} />;
        })}
      </div>
    );
  };
