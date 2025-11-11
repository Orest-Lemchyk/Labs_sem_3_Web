import React, { useContext, useState } from "react";
import ShoeCard from "../../components/ShoeCard/ShoeCard";
// import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { ShoesContext } from "../../context/ShoesContext/ShoesContext";
import "./Catalog.css";

function Catalog() {
  const { shoes } = useContext(ShoesContext);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterSize, setFilterSize] = useState("");
  const [filterColor, setFilterColor] = useState("");
  const [filterPrice, setFilterPrice] = useState("");

  const filteredShoes = shoes.filter((shoe) => {
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      shoe.producer.toLowerCase().includes(query) ||
      shoe.color.toLowerCase().includes(query) ||
      shoe.size.toString().includes(query);

    const matchesSize = filterSize ? shoe.size === parseInt(filterSize) : true;
    const matchesColor = filterColor ? shoe.color === filterColor : true;
    const matchesPrice =
      filterPrice === "low"
        ? shoe.price < 3000
        : filterPrice === "medium"
        ? shoe.price >= 3000 && shoe.price <= 10000
        : filterPrice === "high"
        ? shoe.price > 10000
        : true;

    return matchesSearch && matchesSize && matchesColor && matchesPrice;
  });

  return (
    <div className="catalog-page">
      <h2>Catalog</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search shoes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="filters">
        <select value={filterSize} onChange={(e) => setFilterSize(e.target.value)}>
          <option value="">All Sizes</option>
          {[40, 41, 42, 43, 44, 45].map((size) => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>

        <select value={filterColor} onChange={(e) => setFilterColor(e.target.value)}>
          <option value="">All Colors</option>
          {["black","white","red","blue","green","gray"].map((color) => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>

        <select value={filterPrice} onChange={(e) => setFilterPrice(e.target.value)}>
          <option value="">All Prices</option>
          <option value="low">Below 3000</option>
          <option value="medium">3000 - 10000</option>
          <option value="high">Above 10000</option>
        </select>
      </div>

      <div className="shoe-grid">
        {filteredShoes.length > 0 ? (
          filteredShoes.map((shoe) => <ShoeCard key={shoe.id} {...shoe} />)
        ) : (
          <p>No shoes match your search/filter.</p>
        )}
      </div>
    </div>
  );
}

export default Catalog;
