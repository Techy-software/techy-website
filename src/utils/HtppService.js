import { HttpClient } from "./HttpClient";

export const get = async (url, config = {}) => {
  const response = await HttpClient.get(url, config);
  return response.data;
};

export const post = async (url, body, config = {}) => {
  const response = await HttpClient.post(url, body, config);
  return response.data;
};
