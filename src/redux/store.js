import { configureStore } from "@reduxjs/toolkit";
import counter from "../pages/counter";
import counterReducer from "./counterslice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
export default store;
