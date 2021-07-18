import useFetch from "../../hooks/useFetch";
import { act, renderHook } from "@testing-library/react-hooks";
describe("Tests on useFetch", () => {
  test("should return initial state", async () => {
    const { result } = renderHook(() => useFetch());
    const { isLoading, error } = result.current;

    expect(isLoading).toBe(false);
    expect(error).toBe(null);
  });
  test("should fetch articles from the provided httpCOnfig", async () => {
    //TODO: This test "works" but there is an issue with the enviroment variables from .ENV 
    // To make it work you have to hardcode the endpoint and API key in the FETCH method
    // const { result } = renderHook(() => useFetch());
    // const {httpRequest, isLoading, error}=result.current;
    // await act(async() => {
    //     const result = await httpRequest({
    //         endpoint: "search",
    //         params: `searchText=nintendo`,
    //         method: "GET",
    //     }, (data) => {
    //         console.log(data);;
    //     })
        
    // })
    // await waitForNextUpdate();
  });
});
