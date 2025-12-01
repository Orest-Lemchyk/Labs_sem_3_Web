import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
  addToCart,
} from "../../redux/actions";
import { Link } from "react-router-dom";
import "./CartPage.css";

function CartPage() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleColorChange = (item, newColor) => {
    if (item.color === newColor) return;

    const exists = cart.find(i => i.id === item.id && i.color === newColor);

    if (exists) {
      // якщо айтем з таким кольором вже є, просто збільшуємо його на 1
      dispatch(addToCart({ ...item, color: newColor, quantity: 1 }));
    } else {
      // створюємо новий айтем з quantity = 1
      dispatch(addToCart({ ...item, color: newColor, quantity: 1, availableColors: item.availableColors }));
    }

    // зменшуємо кількість старого айтема на 1 або видаляємо, якщо була 1
    if (item.quantity > 1) {
      dispatch(decreaseQty({ id: item.id, color: item.color }));
    } else {
      dispatch(removeFromCart({ id: item.id, color: item.color }));
    }
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 && <p>Your cart is empty.</p>}

      <div className="cart-items">
        {cart.map((item) => (
          <div className="cart-item" key={`${item.id}-${item.color}`}>
            <Link to={`/product/${item.id}`}>
              <img src={item.image} alt={item.name} />
            </Link>

            <div className="item-info">
              <h3>
                <Link to={`/product/${item.id}`}>{item.name}</Link>
              </h3>
              <p>Price: {item.price}₴</p>

              {/* Вибір кольору */}
              <div className="cart-color-select">
                <p>Color:</p>
                {item.availableColors?.map((color) => (
                  <span
                    key={color}
                    className={`cart-color-dot ${item.color === color ? "selected" : ""}`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorChange(item, color)}
                  />
                ))}
              </div>

              {/* Кількість */}
              <div className="qty-controls">
              <button
                  onClick={() => dispatch(decreaseQty({ id: item.id, color: item.color }))}
                  className={item.quantity === 1 ? "disabled" : ""}
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => dispatch(increaseQty({ id: item.id, color: item.color }))}
                >
                  +
                </button>
              </div>

              <button
                className="remove-btn"
                onClick={() => dispatch(removeFromCart({ id: item.id, color: item.color }))}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <h3 className="total">Total: {total}₴</h3>
    </div>
  );
}

export default CartPage;
