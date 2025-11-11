import React, { createContext, useState } from "react";
import shoesData from "../../data/shoesData";


export const ShoesContext = createContext();

export const ShoesProvider = ({ children }) => {
  const [shoes, setShoes] = useState(shoesData);

  return (
    <ShoesContext.Provider value={{ shoes, setShoes }}>
      {children}
    </ShoesContext.Provider>
  );
};
