import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./count_slicer";

export const store = configureStore({
  reducer: {
    count: countSlice,
  },
});
