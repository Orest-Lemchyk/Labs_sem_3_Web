export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREASE_QTY = "INCREASE_QTY";
export const DECREASE_QTY = "DECREASE_QTY";

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id
});

export const increaseQty = (id) => ({
  type: INCREASE_QTY,
  payload: id
});

export const decreaseQty = (id) => ({
  type: DECREASE_QTY,
  payload: id
});
