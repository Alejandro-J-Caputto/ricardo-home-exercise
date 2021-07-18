import { shallow, configure } from "enzyme";

import "@testing-library/jest-dom";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createSerializer } from "enzyme-to-json";
import ArticlesContainer from "../../../components/articles/ArticlesContainer";
import { SearchArticle } from "../../../types/response.types";

configure({ adapter: new Adapter() });
//@ts-ignore
expect.addSnapshotSerializer(createSerializer({ mode: "deep", noKey: true }));

describe("Tests on ArticlesContainer", () => {
  const items: SearchArticle[] = [];
  let isLoading = true;
  const wrapper = shallow(
    <ArticlesContainer items={items} isLoading={isLoading} />
  );

  test("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("should not display the <p>Total Count<p/>", () => {
    //@ts-ignore

    isLoading = true;
    const totalCount = wrapper.find("p");
    expect(totalCount.exists()).toBe(false);
  });
});
