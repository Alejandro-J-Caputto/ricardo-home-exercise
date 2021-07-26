import { SearchArticle } from "../types/response.types";

export const dummyLocalStorageDB = async (
  id: string,
  article: SearchArticle
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
    return { selectedItemsArr, itemsDBLocal };
  } else {
    selectedItemsArr = JSON.parse(
      localStorage.getItem("selectedItems")!
    ) as string[];
    itemsDBLocal = JSON.parse(
      localStorage.getItem("itemsDBLocal")!
    ) as SearchArticle[];

    if (selectedItemsArr.includes(id)) {
      selectedItemsArr = selectedItemsArr.filter((el: string) => el !== id);
      itemsDBLocal = itemsDBLocal.filter(
        (art: SearchArticle) => art.id !== article.id
      );
      localStorage.setItem("selectedItems", JSON.stringify(selectedItemsArr));
      localStorage.setItem("itemsDBLocal", JSON.stringify(itemsDBLocal));
      return { selectedItemsArr, itemsDBLocal };
    }

    selectedItemsArr.push(id);
    localStorage.setItem("selectedItems", JSON.stringify(selectedItemsArr));
    itemsDBLocal.push(article);
    localStorage.setItem("itemsDBLocal", JSON.stringify(itemsDBLocal));
    return { selectedItemsArr, itemsDBLocal };
  }
};
