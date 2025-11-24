import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty
} from "../../redux/actions";
import "./CartPage.css";

function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleIncrease = (id) => {
    dispatch(increaseQty(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQty(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <h4>{item.name}</h4>
                <p>Price: ${item.price}</p>
                <div className="cart-item-controls">
                  <button onClick={() => handleDecrease(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrease(item.id)}>+</button>
                  <button onClick={() => handleRemove(item.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
          <h3 className="cart-total">Total: ${totalPrice}</h3>
        </div>
      )}
    </div>
  );
}

export default CartPage;
