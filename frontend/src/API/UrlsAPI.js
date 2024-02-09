import axios from "axios";
import { BASE_URL } from "../components/config";

export const Shorten = async (originalUrl, token) => {
  try {
    console.log("data fron urlAPI: ", originalUrl, token);
    const response = await axios.post(
      `${BASE_URL}/url/shorten`,
      { originalUrl },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Shorten URL failed", error);
    throw error;
  }
};

export const Redirect = async (shortUrl, token) => {
  const response = await axios.post(`${BASE_URL}/url/:${shortUrl}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
export const GetAllUrls = async (token) => {
  const response = await axios.post(`${BASE_URL}/url`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const DeleteUrls = async (id, token) => {
  const response = await axios.post(`${BASE_URL}/auth/login/:${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
