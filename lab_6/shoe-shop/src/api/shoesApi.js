import axios from "axios";

const API_URL = "http://localhost:3001";

export const getShoes = async (filters = {}) => {

  const params = {};
  if (filters.type) params.type = filters.type;
  if (filters.color) params.color = filters.color;

 
  if (filters.search) params.q = filters.search;

  const res = await axios.get(`${API_URL}/shoes`, { params });

  let data = res.data;
  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    data = data.filter(
      shoe =>
        shoe.name.toLowerCase().includes(searchLower) ||
        shoe.producer.toLowerCase().includes(searchLower)
    );
  }

  return { data };
};

export const getShoeById = (id) => {
  return axios.get(`${API_URL}/shoes/${id}`);
};
