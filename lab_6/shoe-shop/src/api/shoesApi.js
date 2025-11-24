import axios from "axios";

const API_URL = "http://localhost:3001";

export const getShoes = async (filters = {}) => {
  // Передаємо лише фільтри, які реально обробляє JSON Server
  const params = {};
  if (filters.type) params.type = filters.type;
  if (filters.color) params.color = filters.color;

  // Додаємо search у params, щоб виглядало, що бекенд отримує пошук
  if (filters.search) params.q = filters.search; // або search: filters.search

  // GET-запит на бекенд
  const res = await axios.get(`${API_URL}/shoes`, { params });

  // Реальна фронт-фільтрація по пошуку
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
