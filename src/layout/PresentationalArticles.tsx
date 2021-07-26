import React from "react";

import { SearchArticle } from "../types/response.types";
import { PresentationalArticleItem } from "./PresentationalArticleItem";

export const PresentationalArticles: React.FC<{
  dummyItems: SearchArticle[];
  theme: boolean;
}> = (props) => {
  return (
    <section className="default-items">
      <div className="default-items__title">
        <h2>Find the best products</h2>
      </div>
      <div className="default-item__grid">
        <div className="articles-grid">
          {props.dummyItems.slice(0, 15).map((el) => {
            return (
              <PresentationalArticleItem
                key={el.id}
                itemsContent={el}
                theme={props.theme}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
