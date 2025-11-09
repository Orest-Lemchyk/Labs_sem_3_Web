import React from "react";
import "./ShoeCard.css";

function ShoeCard({ producer, price, size, color, image }) {
  return (
    <div className="shoe-card">
      <img src={image} alt={producer} />
      <h3>{producer}</h3>
      <p>Size: {size}</p>
      <p>Color: {color}</p>
      <p className="price">{price} ₴</p>
      <button disabled>Add to cart</button>
    </div>
  );
}

export default ShoeCard;
