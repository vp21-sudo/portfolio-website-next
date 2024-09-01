// utils/api.js

import axios, { AxiosError } from "axios";

// const baseURL = "http://localhost:12000"; //local
const baseURL = "https://portfolio.spendings.in"; //prod

const sendRequest = async (
  endpoint: string,
  method = "GET",
  data: null | object = null,
  headers = {},
) => {
  try {
    // Retrieve the auth token from local storage
    const token = localStorage.getItem("authToken");

    // Add the Authorization header if a token exists
    if (token) {
      headers = {
        ...headers,
        Authorization: `Bearer ${token}`, // Adjust if your backend uses a different format
      };
    }

    const response = await axios({
      method,
      url: `${baseURL}${endpoint}`,
      headers,
      data,
    });

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.status === 401) {
        localStorage.removeItem("authToken");
      }
    }

    // Handle token expiration or other auth errors if needed
    throw error;
  }
};

export { sendRequest };
