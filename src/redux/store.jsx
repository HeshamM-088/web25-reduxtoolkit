import { configureStore } from "@reduxjs/toolkit";
import { counter } from "./slices/CounterSlice";
import { users } from "./slices/UserSlice";

const store = configureStore({
  reducer: { counter, users },
});

export default store;
