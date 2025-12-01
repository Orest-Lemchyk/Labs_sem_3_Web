import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QTY,
  DECREASE_QTY
} from "./actions";

const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

const initialState = {
  cart: savedCart,
};

export default function rootReducer(state = initialState, action) {
  let updatedCart;

  switch (action.type) {
    case ADD_TO_CART: {
      const { id, color, quantity } = action.payload;
      const exists = state.cart.find(item => item.id === id && item.color === color);

      if (exists) {
        updatedCart = state.cart.map(item =>
          item.id === id && item.color === color
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        updatedCart = [...state.cart, action.payload];
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };
    }

    case REMOVE_FROM_CART: {
      const { id, color } = action.payload;
      updatedCart = state.cart.filter(item => !(item.id === id && item.color === color));
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };
    }

    case INCREASE_QTY: {
      const { id, color } = action.payload;
      updatedCart = state.cart.map(item =>
        item.id === id && item.color === color
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };
    }

    case DECREASE_QTY: {
      const { id, color } = action.payload;
      updatedCart = state.cart
        .map(item =>
          item.id === id && item.color === color
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };
    }

    default:
      return state;
  }
}
