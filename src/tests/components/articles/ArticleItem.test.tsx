import { shallow, configure } from "enzyme";

import "@testing-library/jest-dom";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createSerializer } from "enzyme-to-json";
import React from "react";
import { SearchArticle } from "../../../types/response.types";
import ArticleItem from "../../../components/articles/ArticleItem";

configure({ adapter: new Adapter() });
//@ts-ignore
expect.addSnapshotSerializer(createSerializer({ mode: "deep", noKey: true }));

describe("Tests on ArticlesContainer", () => {
  const article: SearchArticle = {
    id: 123,
    title: "123",
    endDate: "123",
    imageUrl: "123",
    buyNowPrice: 9000,
  };
  const wrapper = shallow(<ArticleItem itemsContent={article} />);

  test("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should have the class article', () => {
    expect(wrapper.find('.article').exists()).toBe(true);
  }) 


});
