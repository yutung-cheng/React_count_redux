import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./slicers/count_slicer";
import personSlicer from "./slicers/person_slicer";

export const store = configureStore({
  reducer: {
    count: countSlice,
    persons: personSlicer,
  },
});
