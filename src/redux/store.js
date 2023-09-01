import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./slicers/count_slicer";
import peoplelicer from "./slicers/person_slicer";

export const store = configureStore({
  reducer: {
    count: countSlice,
    people: peoplelicer,
  },
});
