import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./slice/countSlice";
import cartSlice from "./slice/cartSlice";

const store = configureStore({
  reducer: {
    Counter: countSlice,
    Cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
