import { shallow, configure } from "enzyme";

import "@testing-library/jest-dom";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import SearchBar from "../../../components/search/SearchBar";
import { createSerializer } from "enzyme-to-json";
import React from "react";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

configure({ adapter: new Adapter() });
//@ts-ignore
expect.addSnapshotSerializer(createSerializer({ mode: "deep", noKey: true }));
const eneteredText = "";
const searchInputIsValid = false;
React.useState = jest
  .fn()
  .mockReturnValueOnce([eneteredText, {}])
  .mockReturnValueOnce([searchInputIsValid, {}]);
const wrapper = shallow(<SearchBar />);
const searchInput = wrapper.find("input");
describe("Tests on searchBar component", () => {
  test("should render Searchbar correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should have a label "search Article', () => {
    const label = wrapper.find("label").text();
    expect(label).toBe("Search Article");
  });

  test("The button should be initialy disabled", () => {
    const button = wrapper.find("button");
    expect(button.props().disabled).toBe(true);
  });

  test("should change input value", () => {
    const value = "hello Ricardo team";
    searchInput.simulate("change", { target: { value } });
    //CREATE AN ELEMENT INSIDE THE COMPONENT TO CHECK THIS ASSERTION
  });
  test("should submit the form", (done) => {
    const value = "hello Ricardo team";

    searchInput.simulate("change", { target: { value } });

    setTimeout(() => {
      wrapper.find("button").simulate("click", { preventDefault: () => {} });
      done();
    }, 700);
  });
  let wrapper2 = shallow(<SearchBar />);
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper2 = shallow(<SearchBar />);
  });
  test("should not submit the form", (done) => {
    const inputNoSubmitted = wrapper2.find("input");
    const value = "de";
    inputNoSubmitted.simulate("change", { target: { value } });
    setTimeout(() => {
      wrapper2.find("button").simulate("click", { preventDefault: () => {} });
      done();
    }, 600);
  });
});
