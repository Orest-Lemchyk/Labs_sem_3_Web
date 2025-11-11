import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ShoesContext } from "../../context/ShoesContext/ShoesContext";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import "./ProductPage.css";

function ProductPage() {
  const { id } = useParams();
  const { shoes } = useContext(ShoesContext);

  const shoe = shoes.find((item) => item.id === parseInt(id));

  if (!shoe) return <p>Item not found</p>;

  return (
    <div className="product-page">
      <img src={shoe.image} alt={shoe.producer} />
      <div className="product-info">
        <h2>{shoe.producer}</h2>
        <p>Price: {shoe.price}₴</p>
        <p>Size: {shoe.size}</p>
        <p>Color: {shoe.color}</p>
        <Link to="/catalog">
          <PrimaryButton>Back to Catalog</PrimaryButton>
        </Link>
      </div>
    </div>
  );
}

export default ProductPage;
