import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state, action) => state + 1,
    decrement: (state, action) => state - 1,
    incByAmount: (state, action) => state + action.payload,
  },
});
export const { increment, decrement, incByAmount } = counterSlice.actions;
export default counterSlice.reducer;
