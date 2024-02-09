import axios from "axios";
import { BASE_URL } from "../components/config";

export const Register = async (name, email, password) => {
  const response = await axios.post(`${BASE_URL}/auth/register`, {
    name,
    email,
    password,
  });
  return response.data.token;
};

export const login = async (email, password) => {
  const response = await axios.post(`${BASE_URL}/auth/login`, {
    email,
    password,
  });
  return response.data.token;
};
