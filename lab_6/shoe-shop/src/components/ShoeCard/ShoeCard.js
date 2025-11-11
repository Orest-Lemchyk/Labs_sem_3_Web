import React from "react";
import { Link } from "react-router-dom";
import "./ShoeCard.css";

function ShoeCard({ id, name, price, image }) {
  return (
    <div className="shoe-card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>

      <Link to={`/product/${id}`} className="view-item-link">
        <button className="view-item-btn">View Item</button>
      </Link>
    </div>
  );
}

export default ShoeCard;
