import { configureStore } from "@reduxjs/toolkit";
import search from "./reducers/searchReducer";

export const store = configureStore({
  reducer: {
    search,
  },
});
