import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QTY,
  DECREASE_QTY
} from "./actions";

// ----- INITIAL STATE -----
const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

const initialState = {
  cart: savedCart,
};

// ----- REDUCER -----
export default function rootReducer(state = initialState, action) {
  let updatedCart;

  switch (action.type) {
    case ADD_TO_CART: {
      const exists = state.cart.find(
        (item) =>
          item.id === action.payload.id &&
          item.color === action.payload.color
      );

      if (exists) {
        updatedCart = state.cart.map((item) =>
          item.id === action.payload.id && item.color === action.payload.color
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        updatedCart = [...state.cart, action.payload];
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };
    }

    case REMOVE_FROM_CART: {
      updatedCart = state.cart.filter(
        (item) =>
          !(item.id === action.payload.id && item.color === action.payload.color)
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };
    }

    case INCREASE_QTY: {
      updatedCart = state.cart.map((item) =>
        item.id === action.payload.id && item.color === action.payload.color
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };
    }

    case DECREASE_QTY: {
      updatedCart = state.cart.map((item) =>
        item.id === action.payload.id && item.color === action.payload.color
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };
    }

    default:
      return state;
  }
}
