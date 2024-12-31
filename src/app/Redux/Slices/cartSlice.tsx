import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  quantities: { [productId: string]: number };
};

const initialState: InitialState = {
  quantities: {}, // Object to hold quantities by product ID
};

const itemsSlice = createSlice({
  name: "productItem",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      state.quantities[productId] = (state.quantities[productId] || 0) + 1;
    },
    decrement: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      if (state.quantities[productId]) {
        state.quantities[productId]--;
      }
    },
  },
});

export default itemsSlice.reducer;
export const { increment, decrement } = itemsSlice.actions;

// simple logic
// import { createSlice } from "@reduxjs/toolkit";

// type InitialState = {
//   numOfitems: number;
// };

// const initialState: InitialState = {
//   numOfitems:0,
// };

// const itemsSlice = createSlice({
//   name: "productItem",
//   initialState,
//   reducers: {
//     Incressordered: (state) => {
//       state.numOfitems++;
//     },
//     Decressorder: (state) => {
//       state.numOfitems--;
//     },
//   },
// });

// export default itemsSlice.reducer;
// export const { Incressordered, Decressorder } = itemsSlice.actions; 