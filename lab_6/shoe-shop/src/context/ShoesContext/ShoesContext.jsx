import React, { createContext, useEffect, useState } from "react";
import { getShoes } from "../../api/shoesApi";

export const ShoesContext = createContext();

export const ShoesProvider = ({ children }) => {
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadShoes = async () => {
    setLoading(true);
    try {
      const response = await getShoes();
      setShoes(response.data);
    } catch (error) {
      console.error("Failed to load shoes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadShoes();
  }, []);

  return (
    <ShoesContext.Provider value={{ shoes, loading }}>
      {children}
    </ShoesContext.Provider>
  );
};
