import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty } from "../../redux/actions";

const CartItem = ({ id, name, price, qty }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <p>Qty: {qty}</p>
      <button onClick={() => dispatch(decreaseQty(id))}>-</button>
      <button onClick={() => dispatch(increaseQty(id))}>+</button>
      <button onClick={() => dispatch(removeFromCart(id))}>Remove</button>
    </div>
  );
};

export default CartItem;
