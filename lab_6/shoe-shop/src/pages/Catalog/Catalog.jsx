import React, { useEffect, useState } from "react";
import { getShoes } from "../../api/shoesApi";
import Loader from "../../components/Loader/Loader";
import ShoeCard from "../../components/ShoeCard/ShoeCard";
import "./Catalog.css";

function Catalog() {
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [type, setType] = useState("");
  const [color, setColor] = useState("");
  const [search, setSearch] = useState("");

  const fetchShoes = () => {
    setLoading(true);

    getShoes({
      type: type || undefined,
      color: color || undefined,
      search: search || undefined
    })
      .then((res) => {
        setShoes(res.data);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    setLoading(true);
    getShoes({ type, color, search })
      .then(res => setShoes(res.data))
      .finally(() => setLoading(false));
  }, [type, color, search]);

  const handleSearch = () => {
    fetchShoes();
  };

  return (
    <div className="catalog">
      <h2>Catalog</h2>

      {/* Filters */}
      <div className="filters">
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">All types</option>
          <option value="sneakers">Sneakers</option>
          <option value="running">Running</option>
          <option value="training">Training</option>
          <option value="casual">Casual</option>
          <option value="walking">Walking</option>
          <option value="basketball">Basketball</option>
          <option value="skate">Skate</option>
          <option value="luxury">Luxury</option>
        </select>

        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="">All colors</option>
          <option value="white">White</option>
          <option value="black">Black</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
          <option value="gray">Gray</option>
        </select>

        <input
          type="text"
          placeholder="Search by name or producer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={handleSearch}>Search</button>
      </div>

      {loading ? (
        <Loader />
      ) : shoes.length > 0 ? (
        <div className="shoe-grid">
          {shoes.map((shoe) => (
            <ShoeCard key={shoe.id} {...shoe} />
          ))}
        </div>
      ) : (
        <p>No shoes found.</p>
      )}
    </div>
  );
}

export default Catalog;
