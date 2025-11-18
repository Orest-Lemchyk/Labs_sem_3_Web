import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getShoeById } from "../../api/shoesApi";
import Loader from "../../components/Loader/Loader";
import "./ProductPage.css";

function ProductPage() {
  const { id } = useParams();
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

  return (
    <div className="product-page">
      <img src={shoe.image} alt={shoe.name} />
      <h2>{shoe.name}</h2>
      <p>{shoe.description}</p>
      <h3>{shoe.price}$</h3>
    </div>
  );
}

export default ProductPage;
