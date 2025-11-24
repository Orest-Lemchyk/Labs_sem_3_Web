import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getShoeById } from "../../api/shoesApi";
import Loader from "../../components/Loader/Loader";
import { addToCart } from "../../redux/actions";
import "./ProductPage.css";

function ProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [shoe, setShoe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getShoeById(id)
      .then((res) => setShoe(res.data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader />;
  if (!shoe) return <p>Item not found.</p>;

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: shoe.id,
        name: shoe.name,
        producer: shoe.producer,
        price: shoe.price,
        image: shoe.image,
        quantity: 1,
      })
    );
  };

  return (
    <div className="product-page">
      <img src={shoe.image} alt={shoe.name} />
      <h2>{shoe.name}</h2>
      <p>{shoe.description}</p>
      <h3>{shoe.price}$</h3>

      <button className="back-button" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductPage;
