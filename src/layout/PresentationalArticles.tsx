import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";

import { SearchArticle } from "../types/response.types";
import { PresentationalArticleItem } from "./PresentationalArticleItem";

export const PresentationalArticles: React.FC<{ dummyItems: SearchArticle[] }> =
  (props) => {
    const UI = useSelector((state: RootState) => state.uiLoading);

    const { uiTheme } = UI;
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
                  uiTheme={uiTheme}
                />
              );
            })}
          </div>
        </div>
      </section>
    );
  };
