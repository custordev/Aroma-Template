import { CartItem } from "@/types/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Function to get initial cart items safely
function getInitialCartItems(): CartItem[] {
  if (typeof window !== "undefined") {
    const storedCartItems = localStorage.getItem("cart");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  }
  return []; // Return an empty array during SSR
}

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: getInitialCartItems(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<CartItem>) => {
      state.cartItems.push(action.payload);
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
      }
    },
    removeProductFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
      }
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;
