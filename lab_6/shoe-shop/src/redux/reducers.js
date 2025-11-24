import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QTY,
  DECREASE_QTY
} from "./actions";

const initialState = {
  cart: []
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const itemIndex = state.cart.findIndex(i => i.id === action.payload.id);
      if (itemIndex >= 0) {
        // Якщо вже є у кошику, збільшуємо quantity
        const newCart = [...state.cart];
        newCart[itemIndex].quantity += 1;
        return { ...state, cart: newCart };
      }
      return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
    }

    case REMOVE_FROM_CART:
      return { ...state, cart: state.cart.filter(i => i.id !== action.payload) };

    case INCREASE_QTY:
      return {
        ...state,
        cart: state.cart.map(i =>
          i.id === action.payload ? { ...i, quantity: i.quantity + 1 } : i
        )
      };

    case DECREASE_QTY:
      return {
        ...state,
        cart: state.cart.map(i =>
          i.id === action.payload && i.quantity > 1 ? { ...i, quantity: i.quantity - 1 } : i
        )
      };

    default:
      return state;
  }
};
