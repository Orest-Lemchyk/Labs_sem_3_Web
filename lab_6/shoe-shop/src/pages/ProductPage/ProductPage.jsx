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

  const AVAILABLE_COLORS = ["black", "white", "red", "blue", "green", "gray"];
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedQty, setSelectedQty] = useState(1);

  useEffect(() => {
    setLoading(true);
    getShoeById(id)
      .then((res) => {
        const data = res.data;

        const realColor = data.color;
        const extraColors = AVAILABLE_COLORS.filter((c) => c !== realColor);
        const randomColors = [];

        while (randomColors.length < 2) {
          const rnd = extraColors[Math.floor(Math.random() * extraColors.length)];
          if (!randomColors.includes(rnd)) randomColors.push(rnd);
        }

        data.colors = [realColor, ...randomColors];
        data.availableColors = data.colors;
        setShoe(data);
        setSelectedColor(realColor);
      })
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
        color: selectedColor,
        quantity: selectedQty,
        availableColors: shoe.availableColors,
      })
    );
    alert(`Added to cart: ${shoe.name} (${selectedColor}) x${selectedQty}`);
  };

  return (
    <div className="product-page">
      <img src={shoe.image} alt={shoe.name} className="product-image" />
      <h2>{shoe.name}</h2>
      <p>{shoe.description}</p>
      <h3 className="price">{shoe.price}₴</h3>

      <div className="color-selection">
        <p>Color:</p>
        <div className="color-options">
          {shoe.colors.map((color) => (
            <span
              key={color}
              className={`color-option ${selectedColor === color ? "selected" : ""}`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
      </div>

      <div className="qty-selection">
        <button onClick={() => setSelectedQty(q => Math.max(1, q - 1))}>-</button>
        <span>{selectedQty}</span>
        <button onClick={() => setSelectedQty(q => q + 1)}>+</button>
      </div>

      <button className="add-cart-button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductPage;
