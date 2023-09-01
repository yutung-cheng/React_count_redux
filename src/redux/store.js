import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./slicers/count_slicer";
import perplelicer from "./slicers/person_slicer";

export const store = configureStore({
  reducer: {
    count: countSlice,
    perple: perplelicer,
  },
});
