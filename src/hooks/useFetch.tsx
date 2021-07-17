import { useCallback } from "react";
import { useState } from "react";
import HttpConfig, { cbData } from "../types/http.interface";

const useFetch = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const httpRequest = useCallback(
    async (httpConfig: HttpConfig, cbData: cbData) => {
      console.log("me dispare");
      setIsLoading(true);
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/${httpConfig.endpoint}?${httpConfig.params}&apiToken=${process.env.REACT_APP_API_KEY}`
          // {
          //   method: httpConfig.method,
          // //   headers: httpConfig.headers ? httpConfig.headers : [],
          // //   body: httpConfig.body ? httpConfig.body : null,
          // }
        );
        const data = await response.json();
        cbData(data);
      } catch (error) {
        console.log(error);
      }
    },
    []
  );
  return {
    isLoading,
    error,
    httpRequest,
  };
};

export default useFetch;
