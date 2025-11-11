import React, { useContext } from "react";
import ShoeCard from "../../components/ShoeCard/ShoeCard";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { ShoesContext } from "../../context/ShoesContext/ShoesContext";
import "./Catalog.css";

function Catalog() {
  const { shoes } = useContext(ShoesContext);

  return (
    <div className="catalog-page">
      <h2>Catalog</h2>
      <div className="filters">
        <PrimaryButton>Filter by Price</PrimaryButton>
        <PrimaryButton>Filter by Size</PrimaryButton>
        <PrimaryButton>Filter by Color</PrimaryButton>
      </div>
      <div className="shoe-grid">
        {shoes.map((shoe) => (
          <ShoeCard key={shoe.id} {...shoe} />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
