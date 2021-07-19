import HttpConfig, { cbData } from "../types/http.interface";

export const httpRequest = async (httpConfig: HttpConfig, cbData?: cbData) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/${httpConfig.endpoint}?${httpConfig.params}&apiToken=${process.env.REACT_APP_API_KEY}`,
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
    if (cbData) {
      cbData(data);
    }
    return data;
  } catch (error) {
    return error.message;
  }
};
