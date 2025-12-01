import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions";
import "./ShoeCard.css";

function ShoeCard({ id, name, producer, price, image }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id,
        name,
        producer,
        price,
        image,
        quantity: 1,
      })
    );
  };

  return (
    <div className="shoe-card">
      <img src={image} alt={producer} />
      <h4>{producer}</h4>
      <p>${price}</p>

      <Link to={`/product/${id}`} className="view-item-link">
        <button className="view-item-btn">View Item</button>
      </Link>
    </div>
  );
}

export default ShoeCard;
