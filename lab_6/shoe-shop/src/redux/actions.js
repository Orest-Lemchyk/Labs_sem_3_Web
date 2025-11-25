export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREASE_QTY = "INCREASE_QTY";
export const DECREASE_QTY = "DECREASE_QTY";

export const addToCart = (item) => (dispatch, getState) => {
  const { cart } = getState();
  const existingItemIndex = cart.findIndex(
    (i) => i.id === item.id && i.color === item.color
  );

  if (existingItemIndex >= 0) {
    dispatch({
      type: "INCREASE_QTY",
      payload: { id: item.id, color: item.color, qty: item.quantity },
    });
  } else {
    dispatch({ type: "ADD_TO_CART", payload: item });
  }
};


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
