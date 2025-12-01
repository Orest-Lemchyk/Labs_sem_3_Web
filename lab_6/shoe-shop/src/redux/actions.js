// Типи дій
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREASE_QTY = "INCREASE_QTY";
export const DECREASE_QTY = "DECREASE_QTY";
export const CLEAR_CART = "CLEAR_CART";

// Дії
export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeFromCart = ({ id, color }) => ({
  type: REMOVE_FROM_CART,
  payload: { id, color },
});

export const increaseQty = ({ id, color }) => ({
  type: INCREASE_QTY,
  payload: { id, color },
});

export const decreaseQty = ({ id, color }) => ({
  type: DECREASE_QTY,
  payload: { id, color },
});


export const clearCart = () => ({
  type: CLEAR_CART,
});