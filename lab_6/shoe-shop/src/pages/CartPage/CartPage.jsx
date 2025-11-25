import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  increaseQty,
  decreaseQty,
  removeFromCart
} from "../../redux/actions";
import "./CartPage.css";

function CartPage() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleIncrease = (id, color) => {
    dispatch(increaseQty({ id, color }));
  };

  const handleDecrease = (id, color, qty) => {
    if (qty > 1) dispatch(decreaseQty({ id, color }));
  };

  const handleRemove = (id, color) => {
    dispatch(removeFromCart({ id, color }));
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={`${item.id}-${item.color}`} className="cart-item">
              <img src={item.image} alt={item.producer} />

              <div className="cart-info">
                <Link to={`/product/${item.id}`} className="cart-item-title">
                  <h3>{item.producer}</h3>
                </Link>

                <p>Price: ${item.price}</p>

                <p>
                  Color:{" "}
                  <span
                    className="color-indicator"
                    style={{ backgroundColor: item.color }}
                  ></span>
                  {item.color}
                </p>

                <div className="qty-controls">
                  <button
                    className={`qty-btn minus-btn ${
                      item.quantity === 1 ? "disabled" : ""
                    }`}
                    onClick={() => handleDecrease(item.id, item.color, item.quantity)}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>

                  <span className="qty-value">{item.quantity}</span>

                  <button
                    className="qty-btn plus-btn"
                    onClick={() => handleIncrease(item.id, item.color)}
                  >
                    +
                  </button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => handleRemove(item.id, item.color)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h3 className="total-price">Total: ${totalPrice}</h3>
        </div>
      )}
    </div>
  );
}

export default CartPage;
