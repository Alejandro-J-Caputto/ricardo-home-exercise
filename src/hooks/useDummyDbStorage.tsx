import { useCallback } from "react";
import { cbData } from "../types/http.interface";
import { SearchArticle } from "../types/response.types";

const useDummyDbStorage = () => {
    
  const getSelectedArticlesIdAsync = useCallback(async () => {
    if (
      !localStorage.getItem("selectedItems") ||
      !localStorage.getItem("itemsDBLocal")
    ) {
    const selectedItemsArr:string[] = [];
    const itemsDBLocal: SearchArticle [] = [];
      return {itemsDBLocal, selectedItemsArr};
    }
    const selectedItemsArr = JSON.parse(
      localStorage.getItem("selectedItems")!
    ) as string[];
    const itemsDBLocal = JSON.parse(
      localStorage.getItem("itemsDBLocal")!
    ) as SearchArticle[];
    return { itemsDBLocal, selectedItemsArr };
  }, []);

  const dummyLocalStorageDBHandler = async (
    id: string,
    article: SearchArticle,
    cb?: cbData
  ) => {
    let selectedItemsArr;
    let itemsDBLocal;

    if (
      !localStorage.getItem("selectedItems") &&
      !localStorage.getItem("itemsDBLocal")
    ) {
      selectedItemsArr = [];
      selectedItemsArr.push(id);
      localStorage.setItem("selectedItems", JSON.stringify(selectedItemsArr));
      itemsDBLocal = [];
      itemsDBLocal.push(article);
      localStorage.setItem("itemsDBLocal", JSON.stringify(itemsDBLocal));
      if (cb) {
        cb(itemsDBLocal, selectedItemsArr);
      }
      return { selectedItemsArr, itemsDBLocal };
    } else {
      selectedItemsArr = JSON.parse(
        localStorage.getItem("selectedItems")!
      ) as string[];
      itemsDBLocal = JSON.parse(
        localStorage.getItem("itemsDBLocal")!
      ) as SearchArticle[];

      if (selectedItemsArr.includes(id)) {
        selectedItemsArr = selectedItemsArr.filter(
          (el: string) => el !== id
        ) as string[];
        itemsDBLocal = itemsDBLocal.filter(
          (art: SearchArticle) => art.id !== article.id
        ) as SearchArticle[];
        localStorage.setItem("selectedItems", JSON.stringify(selectedItemsArr));
        localStorage.setItem("itemsDBLocal", JSON.stringify(itemsDBLocal));
        if (cb) {
          cb(itemsDBLocal, selectedItemsArr);
        }

        return { itemsDBLocal, selectedItemsArr };
      }

      selectedItemsArr.push(id);
      localStorage.setItem("selectedItems", JSON.stringify(selectedItemsArr));
      itemsDBLocal.push(article);
      localStorage.setItem("itemsDBLocal", JSON.stringify(itemsDBLocal));
      if (cb) {
        cb(itemsDBLocal, selectedItemsArr);
      }

      return { selectedItemsArr, itemsDBLocal };
    }
  };

  return { dummyLocalStorageDBHandler, getSelectedArticlesIdAsync };
};

export default useDummyDbStorage;
