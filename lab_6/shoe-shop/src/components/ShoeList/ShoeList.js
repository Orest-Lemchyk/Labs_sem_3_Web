import React from "react";
import ShoeCard from "../ShoeCard/ShoeCard";
import shoes from "../../data/shoesData";
import "./ShoeList.css";

function ShoeList() {
  const popularShoes = shoes.slice(0, 5);

  return (
    <section className="shoe-list">
      <h2>Popular Shoes</h2>
      <div className="shoe-grid">
        {popularShoes.map((shoe, index) => (
          <ShoeCard key={index} {...shoe} />
        ))}
      </div>
    </section>
  );
}

export default ShoeList;
