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
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedQty, setSelectedQty] = useState(1);

  useEffect(() => {
    setLoading(true);
    getShoeById(id)
      .then((res) => {
        setShoe(res.data);
        setSelectedColor(res.data.colors?.[0] || ""); // встановлюємо перший колір
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader />;
  if (!shoe) return <p>Item not found.</p>;

  const handleAddToCart = () => {
    if (!selectedColor) return;
    dispatch(
      addToCart({
        id: shoe.id,
        name: shoe.name,
        producer: shoe.producer,
        price: shoe.price,
        image: shoe.image,
        color: selectedColor,
        quantity: selectedQty,
      })
    );
  };

  return (
    <div className="product-page">
      <img src={shoe.image} alt={shoe.name} />
      <h2>{shoe.name}</h2>
      <p>{shoe.description}</p>
      <h3>{shoe.price}$</h3>

      {/* Вибір кольору */}
      <div className="color-selection">
        <p>Color:</p>
        {shoe.colors?.map((color) => (
          <span
            key={color}
            className={`color-option ${selectedColor === color ? "selected" : ""}`}
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
          ></span>
        ))}
      </div>

      {/* Вибір кількості */}
      <div className="qty-selection">
        <button
          onClick={() => setSelectedQty((q) => Math.max(1, q - 1))}
          disabled={selectedQty === 1}
        >
          -
        </button>
        <span>{selectedQty}</span>
        <button onClick={() => setSelectedQty((q) => q + 1)}>+</button>
      </div>

      <button className="add-cart-button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductPage;
