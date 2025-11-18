import axios from "axios";

const API_URL = "http://localhost:3001";

export const getShoes = (filters = {}) => {
  return axios.get(`${API_URL}/shoes`, { params: filters });
};

export const getShoeById = (id) => {
  return axios.get(`${API_URL}/shoes/${id}`);
};
