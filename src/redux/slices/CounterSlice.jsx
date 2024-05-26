import { createSlice } from "@reduxjs/toolkit";

const data = {
  count: 50,
  name: "hamada",
};

const CounterSlice = createSlice({
  name: "counter data",
  initialState: data,
  reducers: {
    increment: (state, action) => {
      state.count += 1;
    },
    decrement: (state, { payload: { num } }) => {
      state.count -= num;
    },
  },
});

export const counter = CounterSlice.reducer;

export const { increment, decrement } = CounterSlice.actions;
