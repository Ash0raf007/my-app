import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./Slices/cartSlice"; // Adjust the path based on your file structure

// Create the Redux store
const store = configureStore({
  reducer: {
    cart: itemsReducer, // Combine your reducers here
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


