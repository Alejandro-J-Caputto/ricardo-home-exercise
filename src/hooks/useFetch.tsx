import { useCallback } from "react";
import { useState } from "react";
import { REACT_APP_API_KEY, REACT_APP_API_URL } from "../env";
import HttpConfig, { cbData } from "../types/http.interface";

export const useFetch = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

 const httpRequest = useCallback(
   async (httpConfig: HttpConfig, cbData?: cbData) => {
     setIsLoading(true);
     try {
        const response = await fetch(
          `${REACT_APP_API_URL}/${httpConfig.endpoint}?${httpConfig.params}&apiToken=${REACT_APP_API_KEY}`,
          {
            method: httpConfig.method,
            headers: httpConfig.headers ? httpConfig.headers : [],
            body: httpConfig.body ? httpConfig.body : null,
          }
        );
        if (!response.ok) {
          throw new Error("There was a problem with the request");
        }
        const data = await response.json();
        setIsLoading(false);
        if (cbData) {
          cbData(data);
        }
        return data;
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    []
  );
  return {
    isLoading,
    error,
    httpRequest,
    setIsLoading
  };
};

export default useFetch;
